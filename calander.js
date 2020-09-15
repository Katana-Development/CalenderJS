// -> DOCUMENT: CALANDER_JS @ ('...rootpath/calander.js')
// -> Developed By: Andrew J Chambers
// -> Find Me on StackOverflow, TAGNAME: AFT3RxL1F3
// -> Repo: https://github.com/Katana-Development/CalenderJS.git
// -> Last Updated: 2020-SEPT-15th

'use strict';

/** ### CalenderJS
 * ---
 * @class CalenderJS
 * @classdesc #### Class that returns the date in UTC
 * @method getTimestamp
 * @method clogDateAndTime
 * @method getDay
 * @method getMonth
 * @method getYear
 * @method getHours
 * @method getMins
 * @method getSecs
 *
 */
class CalenderJS {
    /**
     * @memberof CalenderJS
     * @constructor
     * @desc Sets the current time, and creats all of the class variables listed in Class Description */
    constructor() {
        this.UTC = new Date();
        this.day = this.UTC.getUTCDate();
        this.month = this.UTC.getUTCMonth();
        this.year = this.UTC.getUTCDay();
        this.hours = this.UTC.getUTCHours();
        this.mins = this.UTC.getUTCMinutes();
        this.secs = this.UTC.getUTCSeconds();
    }

    /**
     * @memberof CalenderJS
     * @desc Prints Current Date and Time as timestamp in the console */
    clogDateAndTime() {
        console.log(this.getTimestamp());
    }

    /**
     * @memberof CalenderJS
     * @return {string} timestamp */
    getTimestamp() {
        return `${this.year}-${this.month}-${this.day}  ${this.hours}:${this.mins}:${this.secs}`;
    }

    /**
     *  @memberof CalenderJS
     *  @return {number} day */
    getDay() {
        return this.day;
    }

    /**
     *  @memberof CalenderJS
     *  @return {number} month */
    getMonth() {
        return this.Month;
    }

    /**
     *  @memberof CalenderJS
     *  @return {number} year */
    getYear() {
        return this.year;
    }

    /**
     *  @memberof CalenderJS
     *  @return {number} hours */
    getHours() {
        return this.hours;
    }

    /**
     *  @memberof CalenderJS
     *  @return {number} mins */
    getMins() {
        return this.mins;
    }

    /**
     *  @memberof CalenderJS
     *  @return {number} seconds */
    getSecs() {
        return this.secs;
    }
}

module.exports.CalenderJS = CalenderJS;
