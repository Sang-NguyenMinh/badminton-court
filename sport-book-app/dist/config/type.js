"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEEKDAY = exports.FRIENDSHIP_STATUS = exports.GROUP_ROLE = exports.GROUP_STATUS = exports.ITEM_STATUS = exports.POST_STATUS = exports.PAYMENT_STATUS = exports.PAYMENT_METHOD = exports.ACCOUNT_TYPE = exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "Admin";
    ROLES["OWNER"] = " Owner";
    ROLES["USER"] = "User";
})(ROLES || (exports.ROLES = ROLES = {}));
var ACCOUNT_TYPE;
(function (ACCOUNT_TYPE) {
    ACCOUNT_TYPE["LOCAL"] = "Local";
    ACCOUNT_TYPE["GOOGLE"] = "Google";
})(ACCOUNT_TYPE || (exports.ACCOUNT_TYPE = ACCOUNT_TYPE = {}));
var PAYMENT_METHOD;
(function (PAYMENT_METHOD) {
    PAYMENT_METHOD["CASH"] = "Cash";
    PAYMENT_METHOD["MOMO"] = "MoMo";
    PAYMENT_METHOD["ZALLOPAY"] = "ZaloPay";
})(PAYMENT_METHOD || (exports.PAYMENT_METHOD = PAYMENT_METHOD = {}));
var PAYMENT_STATUS;
(function (PAYMENT_STATUS) {
    PAYMENT_STATUS["PENDING"] = "Pending";
    PAYMENT_STATUS["COMPLETED"] = "Completed";
    PAYMENT_STATUS["FAILED"] = "Failed";
    PAYMENT_STATUS["REFUNDED"] = "Refunded";
})(PAYMENT_STATUS || (exports.PAYMENT_STATUS = PAYMENT_STATUS = {}));
var POST_STATUS;
(function (POST_STATUS) {
    POST_STATUS["DRAFT"] = "Draft";
    POST_STATUS["PUBLISHED"] = "Published";
    POST_STATUS["ARCHIVED"] = "Archived";
    POST_STATUS["DELETED"] = "Deleted";
})(POST_STATUS || (exports.POST_STATUS = POST_STATUS = {}));
var ITEM_STATUS;
(function (ITEM_STATUS) {
    ITEM_STATUS["AVAILABLE"] = "Available";
    ITEM_STATUS["OUT_OF_STOCK"] = "Out of Stock";
    ITEM_STATUS["DISCONTINUED"] = "Discontinued";
})(ITEM_STATUS || (exports.ITEM_STATUS = ITEM_STATUS = {}));
var GROUP_STATUS;
(function (GROUP_STATUS) {
    GROUP_STATUS["ACTIVE"] = "Active";
    GROUP_STATUS["INACTIVE"] = "Inactive";
    GROUP_STATUS["PENDING"] = "Pending";
    GROUP_STATUS["ARCHIVED"] = "Archived";
})(GROUP_STATUS || (exports.GROUP_STATUS = GROUP_STATUS = {}));
var GROUP_ROLE;
(function (GROUP_ROLE) {
    GROUP_ROLE["ADMIN"] = "Admin";
    GROUP_ROLE["MEMBER"] = "Member";
})(GROUP_ROLE || (exports.GROUP_ROLE = GROUP_ROLE = {}));
var FRIENDSHIP_STATUS;
(function (FRIENDSHIP_STATUS) {
    FRIENDSHIP_STATUS["PENDING"] = "Pending";
    FRIENDSHIP_STATUS["ACCEPTED"] = "Accepted";
    FRIENDSHIP_STATUS["DECLINED"] = "Declined";
    FRIENDSHIP_STATUS["BLOCKED"] = "Blocked";
})(FRIENDSHIP_STATUS || (exports.FRIENDSHIP_STATUS = FRIENDSHIP_STATUS = {}));
var WEEKDAY;
(function (WEEKDAY) {
    WEEKDAY["MONDAY"] = "Th\u1EE9 hai";
    WEEKDAY["TUESDAY"] = "Th\u1EE9 ba";
    WEEKDAY["WEDNESDAY"] = "Th\u1EE9 t\u01B0";
    WEEKDAY["THURSDAY"] = "Th\u1EE9 n\u0103m";
    WEEKDAY["FRIDAY"] = "Th\u1EE9 s\u00E1u";
    WEEKDAY["SATURDAY"] = "Th\u1EE9 b\u1EA3y";
    WEEKDAY["SUNDAY"] = "Ch\u1EE7 nh\u1EADt";
})(WEEKDAY || (exports.WEEKDAY = WEEKDAY = {}));
//# sourceMappingURL=type.js.map