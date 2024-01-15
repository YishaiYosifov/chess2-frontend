/* tslint:disable */
/* eslint-disable */
/**
 * Chess2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponseDictStrStr,
  ErrorResponseStr,
  FinishedGame,
  HTTPValidationError,
  PrivateUserOut,
  PublicUserOut,
  Rating,
  RatingOverview,
  Variant,
} from '../models/index';
import {
    ErrorResponseDictStrStrFromJSON,
    ErrorResponseDictStrStrToJSON,
    ErrorResponseStrFromJSON,
    ErrorResponseStrToJSON,
    FinishedGameFromJSON,
    FinishedGameToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PrivateUserOutFromJSON,
    PrivateUserOutToJSON,
    PublicUserOutFromJSON,
    PublicUserOutToJSON,
    RatingFromJSON,
    RatingToJSON,
    RatingOverviewFromJSON,
    RatingOverviewToJSON,
    VariantFromJSON,
    VariantToJSON,
} from '../models/index';

export interface GetInfoRequest {
    target: string;
    authorization?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
}

export interface GetInfoSensitiveRequest {
    authorization?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
}

export interface GetRatingsRequest {
    target: string;
    variants?: Array<Variant>;
    authorization?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
}

export interface GetRatingsHistoryRequest {
    target: string;
    since: Date;
    variants?: Array<Variant>;
    authorization?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
}

export interface PaginateGamesRequest {
    target: string;
    page?: number;
    perPage?: number;
    authorization?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
}

export interface ProfilePictureRequest {
    target: string;
    authorization?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
}

export interface TotalGameCountRequest {
    target: string;
    authorization?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
}

/**
 * 
 */
export class ProfileApi extends runtime.BaseAPI {

    /**
     * Fetch a user\'s profile
     * Get Info
     */
    async getInfoRaw(requestParameters: GetInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicUserOut>> {
        if (requestParameters.target === null || requestParameters.target === undefined) {
            throw new runtime.RequiredError('target','Required parameter requestParameters.target was null or undefined when calling getInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/profile/{target}/info`.replace(`{${"target"}}`, encodeURIComponent(String(requestParameters.target))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicUserOutFromJSON(jsonValue));
    }

    /**
     * Fetch a user\'s profile
     * Get Info
     */
    async getInfo(requestParameters: GetInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicUserOut> {
        const response = await this.getInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch the sensitive profile of user
     * Get Info Sensitive
     */
    async getInfoSensitiveRaw(requestParameters: GetInfoSensitiveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrivateUserOut>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/profile/me/info-sensitive`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PrivateUserOutFromJSON(jsonValue));
    }

    /**
     * Fetch the sensitive profile of user
     * Get Info Sensitive
     */
    async getInfoSensitive(requestParameters: GetInfoSensitiveRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrivateUserOut> {
        const response = await this.getInfoSensitiveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the current ratings of a user. If a user is unrated in a certain variant, that variant will not be returned.
     * Get Ratings
     */
    async getRatingsRaw(requestParameters: GetRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: Rating; }>> {
        if (requestParameters.target === null || requestParameters.target === undefined) {
            throw new runtime.RequiredError('target','Required parameter requestParameters.target was null or undefined when calling getRatings.');
        }

        const queryParameters: any = {};

        if (requestParameters.variants) {
            queryParameters['variants'] = requestParameters.variants;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/profile/{target}/ratings`.replace(`{${"target"}}`, encodeURIComponent(String(requestParameters.target))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => runtime.mapValues(jsonValue, RatingFromJSON));
    }

    /**
     * Get the current ratings of a user. If a user is unrated in a certain variant, that variant will not be returned.
     * Get Ratings
     */
    async getRatings(requestParameters: GetRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: Rating; }> {
        const response = await this.getRatingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the rating history of a user. If a user is unrated in a certain variant, that variant will not be returned.
     * Get Ratings History
     */
    async getRatingsHistoryRaw(requestParameters: GetRatingsHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: RatingOverview; }>> {
        if (requestParameters.target === null || requestParameters.target === undefined) {
            throw new runtime.RequiredError('target','Required parameter requestParameters.target was null or undefined when calling getRatingsHistory.');
        }

        if (requestParameters.since === null || requestParameters.since === undefined) {
            throw new runtime.RequiredError('since','Required parameter requestParameters.since was null or undefined when calling getRatingsHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.since !== undefined) {
            queryParameters['since'] = (requestParameters.since as any).toISOString().substring(0,10);
        }

        if (requestParameters.variants) {
            queryParameters['variants'] = requestParameters.variants;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/profile/{target}/rating-history`.replace(`{${"target"}}`, encodeURIComponent(String(requestParameters.target))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => runtime.mapValues(jsonValue, RatingOverviewFromJSON));
    }

    /**
     * Get the rating history of a user. If a user is unrated in a certain variant, that variant will not be returned.
     * Get Ratings History
     */
    async getRatingsHistory(requestParameters: GetRatingsHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: RatingOverview; }> {
        const response = await this.getRatingsHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Paginate through game history for a specified target. Retrieve a paginated list of game results.
     * Paginate Games
     */
    async paginateGamesRaw(requestParameters: PaginateGamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FinishedGame>>> {
        if (requestParameters.target === null || requestParameters.target === undefined) {
            throw new runtime.RequiredError('target','Required parameter requestParameters.target was null or undefined when calling paginateGames.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per-page'] = requestParameters.perPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/profile/{target}/games`.replace(`{${"target"}}`, encodeURIComponent(String(requestParameters.target))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FinishedGameFromJSON));
    }

    /**
     * Paginate through game history for a specified target. Retrieve a paginated list of game results.
     * Paginate Games
     */
    async paginateGames(requestParameters: PaginateGamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FinishedGame>> {
        const response = await this.paginateGamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a user\'s profile picture. If the user hasn\'t uploaded a picture yet, the default one will be returned.
     * Profile Picture
     */
    async profilePictureRaw(requestParameters: ProfilePictureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.target === null || requestParameters.target === undefined) {
            throw new runtime.RequiredError('target','Required parameter requestParameters.target was null or undefined when calling profilePicture.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/profile/{target}/profile-picture`.replace(`{${"target"}}`, encodeURIComponent(String(requestParameters.target))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get a user\'s profile picture. If the user hasn\'t uploaded a picture yet, the default one will be returned.
     * Profile Picture
     */
    async profilePicture(requestParameters: ProfilePictureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.profilePictureRaw(requestParameters, initOverrides);
    }

    /**
     * Count how many games a user has
     * Total Game Count
     */
    async totalGameCountRaw(requestParameters: TotalGameCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.target === null || requestParameters.target === undefined) {
            throw new runtime.RequiredError('target','Required parameter requestParameters.target was null or undefined when calling totalGameCount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/profile/{target}/total-game-count`.replace(`{${"target"}}`, encodeURIComponent(String(requestParameters.target))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Count how many games a user has
     * Total Game Count
     */
    async totalGameCount(requestParameters: TotalGameCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.totalGameCountRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
