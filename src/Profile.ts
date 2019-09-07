/*!
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * A generic list item
 */
export interface ProfileItem {

    /**
     * The value
     */
    value: string;

    /**
     * The type of value
     */
    type?: string;

    /**
     * If this value is the primary or preferred value of for this field
     */
    primary?: boolean;

    /**
     * If the value has been verified by the service provider
     */
    verified?: boolean;

}

/**
 * A breakout of the user's real name
 */
export interface ProfileName {

    /**
     * The full name, including all middle names, titles, and suffixes as appropriate, formatted for display
     *
     * For example: "Dr. Timothy Antonio Smith, Jr."
     */
    formatted?: string;

    /**
     * The honorific prefix (title)
     *
     * For example: the "Dr" in "Dr. Timothy Antonio Smith, Jr."
     */
    honorificPrefix?: string;

    /**
     * The given name (first name)
     *
     * For example: the "Timothy" in "Dr. Timothy Antonio Smith, Jr."
     */
    givenName?: string;

    /**
     * The middle name
     *
     * For example: the "Antonio" in "Dr. Timothy Antonio Smith, Jr."
     */
    middleName?: string;

    /**
     * The family name (last name)
     *
     * For example: the "Smith" in "Dr. Timothy Antonio Smith, Jr."
     */
    familyName?: string;

    /**
     * The honorific suffix (suffix)
     *
     * For example: the "Jr" in "Dr. Timothy Antonio Smith, Jr."
     */
    honorificSuffix?: string;
}

/**
 * A physical address
 */
export interface ProfileAddress {

    /**
     * The full mailing address, formatted for display
     */
    formatted?: string;

    /**
     * The street address
     */
    streetAddress?: string;

    /**
     * The city or locality
     */
    locality?: string;

    /**
     * The state or region
     */
    region?: string;

    /**
     * The zipcode or postal code
     */
    postalCode?: string;

    /**
     * The country name
     */
    country?: string;

}

/**
 * An organization
 */
export interface ProfileOrganization {

    /**
     * The name of the organization
     */
    name?: string;

    /**
     * The department within the organization
     */
    department?: string;

    /**
     * The job title or role within the organization
     */
    title?: string;

    /**
     * The type of organization
     */
    type?: string;

    /**
     * The date the user joined the organization
     */
    startDate?: Date;

    /**
     * The date the user left the organization
     */
    endDate?: Date;

    /**
     * The physical location of the organization
     */
    location?: string | ProfileAddress;

    /**
     * A description of the user's role in the organization
     */
    description?: string;

}

/**
 * An account the user claims to have on another service
 */
export interface ProfileAccount {

    /**
     * The domain of the service the account is on
     */
    domain: string;

    /**
     * The username of the account
     */
    username?: string;

    /**
     * The userid of the account
     */
    userid?: string;

    /**
     * The url of the account's profile
     */
    profileUrl?: string;

    /**
     * If the service provider has verified the account with the other service
     */
    verified?: boolean;

}

/**
 * A date on a profile, which may be missing parts
 */
export interface ProfileDate {

    /**
     * The year
     */
    year?: number;

    /**
     * The month
     */
    month?: number;

    /**
     * The day
     */
    day?: number;
}

/**
 * A user profile
 */
export interface Profile<T = unknown> {

    /**
     * The id of the service provider
     */
    provider: string;

    /**
     * The user's id
     */
    id: string;

    /**
     * The user's username
     */
    username?: string;

    /**
     * The user's displayed/preferred name
     */
    displayName?: string;

    /**
     * A link to the user's profile on the service
     */
    profileUrl?: string;

    /**
     * The gender the user identifies as
     */
    gender?: string;

    /**
     * The user's birthday
     */
    birthday?: ProfileDate;

    /**
     * A short description about the user
     */
    aboutMe?: string;

    /**
     * The date the user created their profile
     */
    created?: Date;

    /**
     * The user's real name
     */
    name?: ProfileName;

    /**
     * A list of email addresses associated with the user
     */
    emails?: ProfileItem[];

    /**
     * A list of photos of the user
     */
    photos?: ProfileItem[];

    /**
     * A list of urls associated with the user
     */
    urls?: ProfileItem[];

    /**
     * A list of phone numbers associated with the user
     */
    phoneNumbers?: ProfileItem[];

    /**
     * A list of addresses associated with the user
     */
    addresses?: ProfileAddress[];

    /**
     * A list of organizations the user is or has been a part of
     */
    organizations?: ProfileOrganization[];

    /**
     * A list of accounts the user has on other services
     */
    accounts?: ProfileAccount[];

    /**
     * The raw text data returned by the service providor
     */
    _raw: string;

    /**
     * The parsed json data returned by the service providor
     */
    _json: T;

}
