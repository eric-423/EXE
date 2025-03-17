/* eslint-disable */
import * as Router from "expo-router";

export * from "expo-router";

declare module "expo-router" {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string>
      extends Record<string, unknown> {
      StaticRoutes:
        | `/`
        | `/(auth)/customer.changepassword`
        | `/(auth)/customer.login`
        | `/(auth)/customer.signup`
        | `/(auth)/forgot.password`
        | `/(auth)/login`
        | `/(auth)/popup.sale`
        | `/(auth)/request.password`
        | `/(auth)/restaurants`
        | `/(auth)/role.signup`
        | `/(auth)/search`
        | `/(auth)/signup`
        | `/(auth)/verify`
        | `/(auth)/welcome`
        | `/(employee)`
        | `/(employee)/`
        | `/(employee)/account`
        | `/(employee)/chat`
        | `/(employee)/order`
        | `/(employee)/qr`
        | `/(tabs)`
        | `/(tabs)/`
        | `/(tabs)/account`
        | `/(tabs)/chat`
        | `/(tabs)/order`
        | `/(tabs)/qr`
        | `/(user)/account/customer.info`
        | `/(user)/account/info`
        | `/(user)/account/password`
        | `/(user)/like`
        | `/(user)/product/create.modal`
        | `/(user)/product/place.order`
        | `/(user)/product/success`
        | `/(user)/product/update.modal`
        | `/(user)/user`
        | `/_sitemap`
        | `/account`
        | `/account/customer.info`
        | `/account/info`
        | `/account/password`
        | `/chat`
        | `/customer.changepassword`
        | `/customer.login`
        | `/customer.signup`
        | `/forgot.password`
        | `/like`
        | `/like/like.detail`
        | `/login`
        | `/order`
        | `/popup.sale`
        | `/product/create.modal`
        | `/product/place.order`
        | `/product/success`
        | `/product/update.modal`
        | `/qr`
        | `/request.password`
        | `/restaurants`
        | `/role.signup`
        | `/search`
        | `/signup`
        | `/user`
        | `/verify`
        | `/welcome`;
      DynamicRoutes:
        | `/(user)/order/${Router.SingleRoutePart<T>}`
        | `/(user)/product/${Router.SingleRoutePart<T>}`
        | `/chat/${Router.SingleRoutePart<T>}`
        | `/order/${Router.SingleRoutePart<T>}`
        | `/product/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate:
        | `/(user)/order/[id]`
        | `/(user)/product/[id]`
        | `/chat/[id]`
        | `/order/[id]`
        | `/product/[id]`;
    }
  }
}
