"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDLE_TIMEOUT_DURATION = exports.resetIdleTimeout = exports.fetchLastUserInteractionTime = exports.clearUserData = exports.showModalOrNotification = exports.idleTimeoutCondition = void 0;
// idleTimeoutUtils.ts
var axios_1 = require("axios");
// Define the IDLE_TIMEOUT_DURATION constant
var IDLE_TIMEOUT_DURATION = 60000; // 1 minute in milliseconds
exports.IDLE_TIMEOUT_DURATION = IDLE_TIMEOUT_DURATION;
// Define the idleTimeoutCondition function
var idleTimeoutCondition = function (lastUserInteractionTime) {
    // Check if the last user interaction time is null or if the difference between the current time and the last user interaction time
    // is greater than the idle timeout duration
    return lastUserInteractionTime === null || (Date.now() - lastUserInteractionTime) >= IDLE_TIMEOUT_DURATION;
};
exports.idleTimeoutCondition = idleTimeoutCondition;
// Placeholder function for displaying a modal or notification
var showModalOrNotification = function (message) {
    // Replace this with your actual logic for showing a modal or notification
    console.log("Show Modal or Notification: ".concat(message));
};
exports.showModalOrNotification = showModalOrNotification;
// Placeholder function for clearing user data
var clearUserData = function () {
    // Replace this with your actual logic for clearing user data
    console.log('Clearing User Data');
};
exports.clearUserData = clearUserData;
// Function to fetch the last user interaction time from the backend
var fetchLastUserInteractionTime = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get('/api/getLastUserInteractionTime')];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data.lastInteractionTime];
            case 2:
                error_1 = _a.sent();
                console.error('Error fetching last user interaction time:', error_1);
                // Handle error appropriately
                return [2 /*return*/, 0]; // Default value if the API call fails
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.fetchLastUserInteractionTime = fetchLastUserInteractionTime;
// Define the resetIdleTimeout function
var resetIdleTimeout = function () {
    // Implement the resetIdleTimeout logic here
};
exports.resetIdleTimeout = resetIdleTimeout;
