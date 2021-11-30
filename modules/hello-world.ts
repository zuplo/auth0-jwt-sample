import { ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest) {
  
  request.logger.info(request.user);

  return "What zup?";
}


