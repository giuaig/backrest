// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file v1/authentication.proto (package v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message v1.LoginRequest
 */
export class LoginRequest extends Message<LoginRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<LoginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.LoginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): LoginRequest {
    return new LoginRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): LoginRequest {
    return new LoginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): LoginRequest {
    return new LoginRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: LoginRequest | PlainMessage<LoginRequest> | undefined,
    b: LoginRequest | PlainMessage<LoginRequest> | undefined,
  ): boolean {
    return proto3.util.equals(LoginRequest, a, b);
  }
}

/**
 * @generated from message v1.LoginResponse
 */
export class LoginResponse extends Message<LoginResponse> {
  /**
   * JWT token
   *
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<LoginResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.LoginResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): LoginResponse {
    return new LoginResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): LoginResponse {
    return new LoginResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): LoginResponse {
    return new LoginResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: LoginResponse | PlainMessage<LoginResponse> | undefined,
    b: LoginResponse | PlainMessage<LoginResponse> | undefined,
  ): boolean {
    return proto3.util.equals(LoginResponse, a, b);
  }
}
