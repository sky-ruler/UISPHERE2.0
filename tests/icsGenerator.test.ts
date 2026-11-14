import { describe, it, expect, vi } from 'vitest';
import { generateAndDownloadIcs } from '../src/utils/icsGenerator';

describe('icsGenerator utility', () => {
  it('generates a valid RFC 5545 calendar event', () => {
    let capturedBlobContent = '';
    const originalBlob = globalThis.Blob;

    // Spy on Blob constructor to inspect generated iCalendar payload
    vi.spyOn(globalThis, 'Blob').mockImplementation(function (content: any, options: any) {
      capturedBlobContent = content[0];
      return new originalBlob(content, options);
    } as any);

    const mockLink = {
      href: '',
      setAttribute: vi.fn(),
      click: vi.fn(),
    };
    vi.spyOn(document, 'createElement').mockReturnValue(mockLink as any);
    vi.spyOn(document.body, 'appendChild').mockImplementation(() => mockLink as any);
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => mockLink as any);
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:test-url');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    generateAndDownloadIcs({
      title: 'Practical AI Agents with Gemini',
      time: '11:00 AM - 01:00 PM',
      venue: 'Bansuri Guru Lab 3',
    });

    expect(capturedBlobContent).toContain('BEGIN:VCALENDAR');
    expect(capturedBlobContent).toContain('SUMMARY:Tekno Krraft 2026: Practical AI Agents with Gemini');
    expect(capturedBlobContent).toContain('LOCATION:Bansuri Guru Lab 3, ITER Campus, Bhubaneswar');
    expect(capturedBlobContent).toContain('END:VCALENDAR');
    expect(mockLink.setAttribute).toHaveBeenCalledWith('download', 'Practical_AI_Agents_with_Gemini.ics');
    expect(mockLink.click).toHaveBeenCalled();
  });
});

