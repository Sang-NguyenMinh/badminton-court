"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./core/users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const facilities_module_1 = require("./core/facilities/facilities.module");
const courts_module_1 = require("./core/courts/courts.module");
const items_module_1 = require("./core/items/items.module");
const reservations_module_1 = require("./core/reservations/reservations.module");
const invoices_module_1 = require("./core/invoices/invoices.module");
const reservation_details_module_1 = require("./core/reservation-details/reservation-details.module");
const invoice_details_module_1 = require("./core/invoice-details/invoice-details.module");
const groups_module_1 = require("./core/groups/groups.module");
const group_members_module_1 = require("./core/group-members/group-members.module");
const posts_module_1 = require("./core/posts/posts.module");
const comments_module_1 = require("./core/comments/comments.module");
const reactions_module_1 = require("./core/reactions/reactions.module");
const friendships_module_1 = require("./core/friendships/friendships.module");
const auths_module_1 = require("./auths/auths.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auths/passport/jwt-auth.guard");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const google_strategy_1 = require("./auths/passport/google.strategy");
const messages_module_1 = require("./core/messages/messages.module");
const conversations_module_1 = require("./core/conversations/conversations.module");
const payment_module_1 = require("./core/payment/payment.module");
const payment_service_1 = require("./core/payment/payment.service");
const payment_controller_1 = require("./core/payment/payment.controller");
const chat_module_1 = require("./chat/chat.module");
const notification_module_1 = require("./notification/notification.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            facilities_module_1.FacilitiesModule,
            courts_module_1.CourtsModule,
            items_module_1.ItemsModule,
            reservations_module_1.ReservationsModule,
            reservation_details_module_1.ReservationDetailsModule,
            invoices_module_1.InvoicesModule,
            invoice_details_module_1.InvoiceDetailsModule,
            groups_module_1.GroupsModule,
            group_members_module_1.GroupMembersModule,
            posts_module_1.PostsModule,
            comments_module_1.CommentsModule,
            reactions_module_1.ReactionsModule,
            friendships_module_1.FriendshipsModule,
            reservations_module_1.ReservationsModule,
            invoices_module_1.InvoicesModule,
            reservation_details_module_1.ReservationDetailsModule,
            invoice_details_module_1.InvoiceDetailsModule,
            groups_module_1.GroupsModule,
            group_members_module_1.GroupMembersModule,
            posts_module_1.PostsModule,
            comments_module_1.CommentsModule,
            reactions_module_1.ReactionsModule,
            friendships_module_1.FriendshipsModule,
            auths_module_1.AuthsModule,
            messages_module_1.MessagesModule,
            conversations_module_1.ConversationsModule,
            payment_module_1.PaymentModule,
            chat_module_1.ChatModule,
            cloudinary_module_1.CloudinaryModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    transport: {
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,
                        auth: {
                            user: configService.get('MAIL_USER'),
                            pass: configService.get('MAIL_PASSWORD'),
                        },
                    },
                    defaults: {
                        from: '"No Reply" <no-reply@localhost>',
                    },
                    template: {
                        dir: process.cwd() + '/src/mail/templates/',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            chat_module_1.ChatModule,
            notification_module_1.NotificationModule,
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [app_controller_1.AppController, payment_controller_1.PaymentController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            google_strategy_1.GoogleStrategy,
            payment_service_1.PaymentService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map