"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errors = null;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse === 'string') {
                message = exceptionResponse;
                errors = [exceptionResponse];
            }
            else if (typeof exceptionResponse === 'object' &&
                exceptionResponse !== null) {
                message =
                    exceptionResponse.message || exceptionResponse.error || message;
                errors = Array.isArray(exceptionResponse.message)
                    ? exceptionResponse.message
                    : [exceptionResponse.message || message];
            }
        }
        else if (exception instanceof Error) {
            message = exception.message;
            errors = [exception.message];
        }
        switch (true) {
            case exception instanceof common_1.BadRequestException:
                message = 'Bad Request';
                break;
            case exception instanceof common_1.UnauthorizedException:
                message = 'Unauthorized';
                break;
            case exception instanceof common_1.NotFoundException:
                message = 'Not Found';
                break;
            case exception instanceof common_1.ForbiddenException:
                message = 'Forbidden';
                break;
            case exception instanceof common_1.NotAcceptableException:
                message = 'Not Acceptable';
                break;
            case exception instanceof common_1.RequestTimeoutException:
                message = 'Request Timeout';
                break;
            case exception instanceof common_1.ConflictException:
                message = 'Conflict';
                break;
            case exception instanceof common_1.GoneException:
                message = 'Gone';
                break;
            case exception instanceof common_1.HttpVersionNotSupportedException:
                message = 'HTTP Version Not Supported';
                break;
            case exception instanceof common_1.PayloadTooLargeException:
                message = 'Payload Too Large';
                break;
            case exception instanceof common_1.UnsupportedMediaTypeException:
                message = 'Unsupported Media Type';
                break;
            case exception instanceof common_1.UnprocessableEntityException:
                message = 'Unprocessable Entity';
                break;
            case exception instanceof common_1.InternalServerErrorException:
                message = 'Internal Server Error';
                break;
            case exception instanceof common_1.NotImplementedException:
                message = 'Not Implemented';
                break;
            case exception instanceof common_1.ImATeapotException:
                message = "I'm a teapot";
                break;
            case exception instanceof common_1.MethodNotAllowedException:
                message = 'Method Not Allowed';
                break;
            case exception instanceof common_1.BadGatewayException:
                message = 'Bad Gateway';
                break;
            case exception instanceof common_1.ServiceUnavailableException:
                message = 'Service Unavailable';
                break;
            case exception instanceof common_1.GatewayTimeoutException:
                message = 'Gateway Timeout';
                break;
            case exception instanceof common_1.PreconditionFailedException:
                message = 'Precondition Failed';
                break;
        }
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: message,
            errors: errors,
        });
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exceptions.filter.js.map