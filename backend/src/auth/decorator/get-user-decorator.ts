import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user

        console.log("User Data =====>", request.user)

       return data ? user?.[data] : user
    }
)