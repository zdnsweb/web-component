/**
 * @jest-environment jsdom
 */

import { ZDNSLogo } from '../zdns-logo';

describe('zdns-logo', () => {
  it('Expect to have unit tests specified', () => {
    expect(ZDNSLogo).toBeDefined();
  });
});
