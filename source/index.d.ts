declare module "index" {
    export namespace HttpStatuses {
        namespace Continue {
            let status: 100;
            let statusText: "Continue";
        }
        namespace SwitchingProtocols {
            let status_1: 101;
            export { status_1 as status };
            let statusText_1: "Switching Protocols";
            export { statusText_1 as statusText };
        }
        namespace Processing {
            let status_2: 102;
            export { status_2 as status };
            let statusText_2: "Processing";
            export { statusText_2 as statusText };
        }
        namespace EarlyHints {
            let status_3: 103;
            export { status_3 as status };
            let statusText_3: "Early Hints";
            export { statusText_3 as statusText };
        }
        namespace OK {
            let status_4: 200;
            export { status_4 as status };
            let statusText_4: "OK";
            export { statusText_4 as statusText };
        }
        namespace Created {
            let status_5: 201;
            export { status_5 as status };
            let statusText_5: "Created";
            export { statusText_5 as statusText };
        }
        namespace Accepted {
            let status_6: 202;
            export { status_6 as status };
            let statusText_6: "Accepted";
            export { statusText_6 as statusText };
        }
        namespace NonAuthoritativeInformation {
            let status_7: 203;
            export { status_7 as status };
            let statusText_7: "Non-Authoritative Information";
            export { statusText_7 as statusText };
        }
        namespace NoContent {
            let status_8: 204;
            export { status_8 as status };
            let statusText_8: "No Content";
            export { statusText_8 as statusText };
        }
        namespace ResetContent {
            let status_9: 205;
            export { status_9 as status };
            let statusText_9: "Reset Content";
            export { statusText_9 as statusText };
        }
        namespace PartialContent {
            let status_10: 206;
            export { status_10 as status };
            let statusText_10: "Partial Content";
            export { statusText_10 as statusText };
        }
        namespace MultipleChoices {
            let status_11: 300;
            export { status_11 as status };
            let statusText_11: "Multiple Choices";
            export { statusText_11 as statusText };
        }
        namespace MovedPermanently {
            let status_12: 301;
            export { status_12 as status };
            let statusText_12: "Moved Permanently";
            export { statusText_12 as statusText };
        }
        namespace Found {
            let status_13: 302;
            export { status_13 as status };
            let statusText_13: "Found";
            export { statusText_13 as statusText };
        }
        namespace SeeOther {
            let status_14: 303;
            export { status_14 as status };
            let statusText_14: "See Other";
            export { statusText_14 as statusText };
        }
        namespace NotModified {
            let status_15: 304;
            export { status_15 as status };
            let statusText_15: "Not Modified";
            export { statusText_15 as statusText };
        }
        namespace UseProxy {
            let status_16: 305;
            export { status_16 as status };
            let statusText_16: "Use Proxy";
            export { statusText_16 as statusText };
        }
        namespace TemporaryRedirect {
            let status_17: 307;
            export { status_17 as status };
            let statusText_17: "Temporary Redirect";
            export { statusText_17 as statusText };
        }
        namespace PermanentRedirect {
            let status_18: 308;
            export { status_18 as status };
            let statusText_18: "Permanent Redirect";
            export { statusText_18 as statusText };
        }
        namespace BadRequest {
            let status_19: 400;
            export { status_19 as status };
            let statusText_19: "Bad Request";
            export { statusText_19 as statusText };
        }
        namespace Unauthorized {
            let status_20: 401;
            export { status_20 as status };
            let statusText_20: "Unauthorized";
            export { statusText_20 as statusText };
        }
        namespace PaymentRequired {
            let status_21: 402;
            export { status_21 as status };
            let statusText_21: "Payment Required";
            export { statusText_21 as statusText };
        }
        namespace Forbidden {
            let status_22: 403;
            export { status_22 as status };
            let statusText_22: "Forbidden";
            export { statusText_22 as statusText };
        }
        namespace NotFound {
            let status_23: 404;
            export { status_23 as status };
            let statusText_23: "Not Found";
            export { statusText_23 as statusText };
        }
        namespace MethodNotAllowed {
            let status_24: 405;
            export { status_24 as status };
            let statusText_24: "Method Not Allowed";
            export { statusText_24 as statusText };
        }
        namespace NotAcceptable {
            let status_25: 406;
            export { status_25 as status };
            let statusText_25: "Not Acceptable";
            export { statusText_25 as statusText };
        }
        namespace ProxyAuthenticationRequired {
            let status_26: 407;
            export { status_26 as status };
            let statusText_26: "Proxy Authentication Required";
            export { statusText_26 as statusText };
        }
        namespace RequestTimeout {
            let status_27: 408;
            export { status_27 as status };
            let statusText_27: "Request Timeout";
            export { statusText_27 as statusText };
        }
        namespace Conflict {
            let status_28: 409;
            export { status_28 as status };
            let statusText_28: "Conflict";
            export { statusText_28 as statusText };
        }
        namespace Gone {
            let status_29: 410;
            export { status_29 as status };
            let statusText_29: "Gone";
            export { statusText_29 as statusText };
        }
        namespace LengthRequired {
            let status_30: 411;
            export { status_30 as status };
            let statusText_30: "Length Required";
            export { statusText_30 as statusText };
        }
        namespace PreconditionFailed {
            let status_31: 412;
            export { status_31 as status };
            let statusText_31: "Precondition Failed";
            export { statusText_31 as statusText };
        }
        namespace ContentTooLarge {
            let status_32: 413;
            export { status_32 as status };
            let statusText_32: "Content Too Large";
            export { statusText_32 as statusText };
        }
        namespace URITooLong {
            let status_33: 414;
            export { status_33 as status };
            let statusText_33: "URI Too Long";
            export { statusText_33 as statusText };
        }
        namespace UnsupportedMediaType {
            let status_34: 415;
            export { status_34 as status };
            let statusText_34: "Unsupported Media Type";
            export { statusText_34 as statusText };
        }
        namespace RangeNotSatisfiable {
            let status_35: 416;
            export { status_35 as status };
            let statusText_35: "Range Not Satisfiable";
            export { statusText_35 as statusText };
        }
        namespace ExpectationFailed {
            let status_36: 417;
            export { status_36 as status };
            let statusText_36: "Expectation Failed";
            export { statusText_36 as statusText };
        }
        namespace MisdirectedRequest {
            let status_37: 421;
            export { status_37 as status };
            let statusText_37: "Misdirected Request";
            export { statusText_37 as statusText };
        }
        namespace UnprocessableContent {
            let status_38: 422;
            export { status_38 as status };
            let statusText_38: "Unprocessable Content";
            export { statusText_38 as statusText };
        }
        namespace UpgradeRequired {
            let status_39: 426;
            export { status_39 as status };
            let statusText_39: "Upgrade Required";
            export { statusText_39 as statusText };
        }
        namespace InternalServerError {
            let status_40: 500;
            export { status_40 as status };
            let statusText_40: "Internal Server Error";
            export { statusText_40 as statusText };
        }
        namespace NotImplemented {
            let status_41: 501;
            export { status_41 as status };
            let statusText_41: "Not Implemented";
            export { statusText_41 as statusText };
        }
        namespace BadGateway {
            let status_42: 502;
            export { status_42 as status };
            let statusText_42: "Bad Gateway";
            export { statusText_42 as statusText };
        }
        namespace ServiceUnavailable {
            let status_43: 503;
            export { status_43 as status };
            let statusText_43: "Service Unavailable";
            export { statusText_43 as statusText };
        }
        namespace GatewayTimeout {
            let status_44: 504;
            export { status_44 as status };
            let statusText_44: "Gateway Timeout";
            export { statusText_44 as statusText };
        }
        namespace HTTPVersionNotSupported {
            let status_45: 505;
            export { status_45 as status };
            let statusText_45: "HTTP Version Not Supported";
            export { statusText_45 as statusText };
        }
    }
}
