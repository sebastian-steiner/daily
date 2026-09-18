// getters for displaying part of the date
export const getDay = function (date: Date): string {
    return String(date.getDate()).padStart(2, '0');
}
export const getMonth = function (date: Date): string {
    return date.toLocaleString('default', { month: 'long' });
};
export const getCentury = function (date: Date): string {
    return String(Math.floor(date.getFullYear() / 100)) + "xx"
}
export const getYear = function (date: Date): string {
    return "xx" + String(date.getFullYear() % 100).padStart(2, '0');
}

// calculate the individual parts
export const getDayCode = function (date: Date): number {
    return date.getDate() % 7;
}
export const getMonthCode = function (date: Date): number {
    return [4, 0, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2][date.getMonth()];
}
export const getLeapYearOffset = function (date: Date): number {
    const year = date.getFullYear();
    let leapYear = false;
    if (year % 400 == 0) {
        leapYear = true;
    } else if (year % 100 != 0 && year % 4 == 0) {
        leapYear = true;
    }
    if (!leapYear) {
        return 0;
    }
    if (date.getMonth() <= 1) {
        return -1;
    }
    return 0;
}
export const getCenturyCode = function (date: Date): number {
    const century = Math.floor(date.getFullYear() / 100) % 4;
    return [0, 5, 3, 1][century];
}
export const getYearCode = function (date: Date): number {
    const year = date.getFullYear() % 100;
    return (year + Math.floor(year / 4) + 2) % 7;
}
export const getDateCode = function (date: Date): number {
    return (getDayCode(date) + getMonthCode(date) + getLeapYearOffset(date) + getCenturyCode(date) + getYearCode(date)) % 7;
}
export const getWeekDay = function (date: Date): string {
    return date.toLocaleDateString("default", { weekday: "long"})
}