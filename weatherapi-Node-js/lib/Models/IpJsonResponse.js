/**
 * WeatherAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of IpJsonResponse
 */
class IpJsonResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.ip = this.constructor.getValue(obj.ip);
        this.type = this.constructor.getValue(obj.type);
        this.continentCode = this.constructor.getValue(obj.continentCode || obj.continent_code);
        this.continentName = this.constructor.getValue(obj.continentName || obj.continent_name);
        this.countryCode = this.constructor.getValue(obj.countryCode || obj.country_code);
        this.countryName = this.constructor.getValue(obj.countryName || obj.country_name);
        this.isEu = this.constructor.getValue(obj.isEu || obj.is_eu);
        this.geonameId = this.constructor.getValue(obj.geonameId || obj.geoname_id);
        this.city = this.constructor.getValue(obj.city);
        this.region = this.constructor.getValue(obj.region);
        this.lat = this.constructor.getValue(obj.lat);
        this.lon = this.constructor.getValue(obj.lon);
        this.tzId = this.constructor.getValue(obj.tzId || obj.tz_id);
        this.localtimeEpoch = this.constructor.getValue(obj.localtimeEpoch || obj.localtime_epoch);
        this.localtime = this.constructor.getValue(obj.localtime);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'ip', realName: 'ip' },
            { name: 'type', realName: 'type' },
            { name: 'continentCode', realName: 'continent_code' },
            { name: 'continentName', realName: 'continent_name' },
            { name: 'countryCode', realName: 'country_code' },
            { name: 'countryName', realName: 'country_name' },
            { name: 'isEu', realName: 'is_eu' },
            { name: 'geonameId', realName: 'geoname_id' },
            { name: 'city', realName: 'city' },
            { name: 'region', realName: 'region' },
            { name: 'lat', realName: 'lat' },
            { name: 'lon', realName: 'lon' },
            { name: 'tzId', realName: 'tz_id' },
            { name: 'localtimeEpoch', realName: 'localtime_epoch' },
            { name: 'localtime', realName: 'localtime' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = IpJsonResponse;