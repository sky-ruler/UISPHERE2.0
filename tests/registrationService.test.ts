import { describe, it, expect, beforeEach } from 'vitest';
import { registrationService } from '../src/services/registrationService';

describe('registrationService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('submits registration and persists record in localStorage with TK26 code', async () => {
    const result = await registrationService.submitRegistration({
      name: 'Rohan Mishra',
      email: 'rohan@iter.ac.in',
      college: 'Institute of Technical Education & Research',
      track: 'hackathon',
    });

    expect(result.success).toBe(true);
    expect(result.record.id).toMatch(/^TK26-[A-Z0-9]{5}$/);
    expect(result.record.name).toBe('Rohan Mishra');
    expect(result.record.status).toBe('confirmed');

    const stored = registrationService.getLocalRegistrations();
    expect(stored.length).toBe(1);
    expect(stored[0].id).toBe(result.record.id);
  });
});

