import { describe, it, expect, vi } from 'vitest';
import { generateAndDownloadPassSvg } from '../src/utils/passGenerator';

describe('passGenerator utility', () => {
  it('generates an SVG with customized attendee name and pass code', () => {
    let capturedSvgContent = '';
    const originalBlob = globalThis.Blob;

    vi.spyOn(globalThis, 'Blob').mockImplementation(function (content: any, options: any) {
      capturedSvgContent = content[0];
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
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:test-svg');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    generateAndDownloadPassSvg({
      name: 'Priyanshu Panda',
      tier: 'AI & CLOUD SPRINT BUILDER',
      passId: 'GDG-ITER-2026',
      college: 'SOA University',
    });

    expect(capturedSvgContent).toContain('PRIYANSHU PANDA');
    expect(capturedSvgContent).toContain('AI &amp; CLOUD SPRINT BUILDER');
    expect(capturedSvgContent).toContain('#GDG-ITER-2026');
    expect(capturedSvgContent).toContain('SOA University');
    expect(mockLink.setAttribute).toHaveBeenCalledWith(
      'download',
      'TeknoKrraft_2026_Pass_PRIYANSHU_PANDA.svg'
    );
  });
});

