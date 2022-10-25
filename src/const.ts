import { ValidateInResponseTo } from '@node-saml/node-saml/lib/types';

export const SPID_LEVELS = {
  SpidL1: 'https://www.spid.gov.it/SpidL1',
  SpidL2: 'https://www.spid.gov.it/SpidL2',
  SpidL3: 'https://www.spid.gov.it/SpidL3',
} as const;

export const FORCE_AUTHN_LEVELS: ReadonlyArray<keyof typeof SPID_LEVELS> = [
  'SpidL2',
  'SpidL3',
];

export const SPID_IDP_IDENTIFIERS = {
  'https://id.lepida.it/idp/shibboleth': 'lepidaid',
  'https://identity.infocert.it': 'infocertid',
  'https://identity.sieltecloud.it': 'sielteid',
  'https://idp.namirialtsp.com/idp': 'namirialid',
  'https://login.id.tim.it/affwebservices/public/saml2sso': 'timid',
  'https://loginspid.aruba.it': 'arubaid',
  'https://posteid.poste.it': 'posteid',
  'https://spid.intesa.it': 'intesaid',
  'https://spid.register.it': 'spiditalia',
} as const;

export const SPID_SAML_EXTENSION = 'https://spid.gov.it/saml-extensions';

export const IDENTIFIER_FORMAT =
  'urn:oasis:names:tc:SAML:2.0:nameid-format:transient';
export const ISSUER_FORMAT = 'urn:oasis:names:tc:SAML:2.0:nameid-format:entity';
export const SUBJECT_CONFIRMATION_METHOD =
  'urn:oasis:names:tc:SAML:2.0:cm:bearer';

export const SPID_FORCED_SAML_CONFIG = {
  signMetadata: false,
  digestAlgorithm: 'sha512',
  allowCreate: false,
  wantAssertionsSigned: true,
  disableRequestedAuthnContext: false,
  validateInResponseTo: ValidateInResponseTo.never,
  identifierFormat: IDENTIFIER_FORMAT,
  passive: false,
  cacheProvider: null,
  requestIdExpirationPeriodMs: 15 * 60 * 1000,
  // TODO remove
  acceptedClockSkewMs: -1,
} as const;
