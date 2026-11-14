import { RegistrationFormData } from '../types';

export interface RegistrationRecord extends RegistrationFormData {
  id: string;
  timestamp: string;
  status: 'confirmed' | 'pending';
}

const STORAGE_KEY = 'tekno_krraft_registrations';

/**
 * Service to handle attendee registrations with local offline persistence
 * and optional REST / Firebase webhook sync.
 */
export const registrationService = {
  /**
   * Save registration locally and sync to cloud if configured.
   */
  async submitRegistration(data: RegistrationFormData): Promise<{
    success: boolean;
    record: RegistrationRecord;
  }> {
    // Generate a unique badge pass code: e.g., TK26-8A3F9
    const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    const registrationId = `TK26-${randomCode}`;

    const newRecord: RegistrationRecord = {
      ...data,
      id: registrationId,
      timestamp: new Date().toISOString(),
      status: 'confirmed',
    };

    // 1. Simulate network request (400ms for realistic UI feel)
    await new Promise((resolve) => setTimeout(resolve, 400));

    // 2. Persist in LocalStorage
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const list: RegistrationRecord[] = existing ? JSON.parse(existing) : [];
      list.push(newRecord);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage unavailable for registration backup', err);
    }

    // 3. Optional Cloud Endpoint Sync (e.g. Google Cloud / Firebase / Webhook)
    const apiUrl = import.meta.env.VITE_REGISTRATION_API_URL;
    if (apiUrl) {
      try {
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRecord),
        });
      } catch (cloudErr) {
        console.warn('Cloud sync error (fallback to local success)', cloudErr);
      }
    }

    return {
      success: true,
      record: newRecord,
    };
  },

  /**
   * Retrieve all cached registrations (for admin verification or attendee lookup).
   */
  getLocalRegistrations(): RegistrationRecord[] {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      return existing ? JSON.parse(existing) : [];
    } catch {
      return [];
    }
  },
};

