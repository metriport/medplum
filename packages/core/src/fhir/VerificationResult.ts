/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Signature } from './Signature';
import { Timing } from './Timing';

/**
 * Describes validation requirements, source(s), status and dates for one
 * or more elements.
 */
export interface VerificationResult {

  /**
   * This is a VerificationResult resource
   */
  readonly resourceType: 'VerificationResult';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A resource that was validated.
   */
  readonly target?: Reference[];

  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  readonly targetLocation?: string[];

  /**
   * The frequency with which the target must be validated (none; initial;
   * periodic).
   */
  readonly need?: CodeableConcept;

  /**
   * The validation status of the target (attested; validated; in process;
   * requires revalidation; validation failed; revalidation failed).
   */
  readonly status?: string;

  /**
   * When the validation status was updated.
   */
  readonly statusDate?: Date;

  /**
   * What the target is validated against (nothing; primary source;
   * multiple sources).
   */
  readonly validationType?: CodeableConcept;

  /**
   * The primary process by which the target is validated (edit check;
   * value set; primary source; multiple sources; standalone; in context).
   */
  readonly validationProcess?: CodeableConcept[];

  /**
   * Frequency of revalidation.
   */
  readonly frequency?: Timing;

  /**
   * The date/time validation was last completed (including failed
   * validations).
   */
  readonly lastPerformed?: Date;

  /**
   * The date when target is next validated, if appropriate.
   */
  readonly nextScheduled?: Date;

  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  readonly failureAction?: CodeableConcept;

  /**
   * Information about the primary source(s) involved in validation.
   */
  readonly primarySource?: VerificationResultPrimarySource[];

  /**
   * Information about the entity attesting to information.
   */
  readonly attestation?: VerificationResultAttestation;

  /**
   * Information about the entity validating information.
   */
  readonly validator?: VerificationResultValidator[];
}

/**
 * Describes validation requirements, source(s), status and dates for one
 * or more elements.
 */
export interface VerificationResultAttestation {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The individual or organization attesting to information.
   */
  readonly who?: Reference;

  /**
   * When the who is asserting on behalf of another (organization or
   * individual).
   */
  readonly onBehalfOf?: Reference;

  /**
   * The method by which attested information was submitted/retrieved
   * (manual; API; Push).
   */
  readonly communicationMethod?: CodeableConcept;

  /**
   * The date the information was attested to.
   */
  readonly date?: Date;

  /**
   * A digital identity certificate associated with the attestation source.
   */
  readonly sourceIdentityCertificate?: string;

  /**
   * A digital identity certificate associated with the proxy entity
   * submitting attested information on behalf of the attestation source.
   */
  readonly proxyIdentityCertificate?: string;

  /**
   * Signed assertion by the proxy entity indicating that they have the
   * right to submit attested information on behalf of the attestation
   * source.
   */
  readonly proxySignature?: Signature;

  /**
   * Signed assertion by the attestation source that they have attested to
   * the information.
   */
  readonly sourceSignature?: Signature;
}

/**
 * Describes validation requirements, source(s), status and dates for one
 * or more elements.
 */
export interface VerificationResultPrimarySource {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Reference to the primary source.
   */
  readonly who?: Reference;

  /**
   * Type of primary source (License Board; Primary Education; Continuing
   * Education; Postal Service; Relationship owner; Registration Authority;
   * legal source; issuing source; authoritative source).
   */
  readonly type?: CodeableConcept[];

  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  readonly communicationMethod?: CodeableConcept[];

  /**
   * Status of the validation of the target against the primary source
   * (successful; failed; unknown).
   */
  readonly validationStatus?: CodeableConcept;

  /**
   * When the target was validated against the primary source.
   */
  readonly validationDate?: Date;

  /**
   * Ability of the primary source to push updates/alerts (yes; no;
   * undetermined).
   */
  readonly canPushUpdates?: CodeableConcept;

  /**
   * Type of alerts/updates the primary source can send (specific requested
   * changes; any changes; as defined by source).
   */
  readonly pushTypeAvailable?: CodeableConcept[];
}

/**
 * Describes validation requirements, source(s), status and dates for one
 * or more elements.
 */
export interface VerificationResultValidator {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Reference to the organization validating information.
   */
  readonly organization?: Reference;

  /**
   * A digital identity certificate associated with the validator.
   */
  readonly identityCertificate?: string;

  /**
   * Signed assertion by the validator that they have validated the
   * information.
   */
  readonly attestationSignature?: Signature;
}