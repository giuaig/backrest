// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file types/value.proto (package types, syntax proto3)
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
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message types.StringValue
 */
export class StringValue extends Message<StringValue> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<StringValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "types.StringValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): StringValue {
    return new StringValue().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): StringValue {
    return new StringValue().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): StringValue {
    return new StringValue().fromJsonString(jsonString, options);
  }

  static equals(
    a: StringValue | PlainMessage<StringValue> | undefined,
    b: StringValue | PlainMessage<StringValue> | undefined,
  ): boolean {
    return proto3.util.equals(StringValue, a, b);
  }
}

/**
 * @generated from message types.BytesValue
 */
export class BytesValue extends Message<BytesValue> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<BytesValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "types.BytesValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BytesValue {
    return new BytesValue().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BytesValue {
    return new BytesValue().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BytesValue {
    return new BytesValue().fromJsonString(jsonString, options);
  }

  static equals(
    a: BytesValue | PlainMessage<BytesValue> | undefined,
    b: BytesValue | PlainMessage<BytesValue> | undefined,
  ): boolean {
    return proto3.util.equals(BytesValue, a, b);
  }
}

/**
 * @generated from message types.StringList
 */
export class StringList extends Message<StringList> {
  /**
   * @generated from field: repeated string values = 1;
   */
  values: string[] = [];

  constructor(data?: PartialMessage<StringList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "types.StringList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "values",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): StringList {
    return new StringList().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): StringList {
    return new StringList().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): StringList {
    return new StringList().fromJsonString(jsonString, options);
  }

  static equals(
    a: StringList | PlainMessage<StringList> | undefined,
    b: StringList | PlainMessage<StringList> | undefined,
  ): boolean {
    return proto3.util.equals(StringList, a, b);
  }
}

/**
 * @generated from message types.Int64Value
 */
export class Int64Value extends Message<Int64Value> {
  /**
   * @generated from field: int64 value = 1;
   */
  value = protoInt64.zero;

  constructor(data?: PartialMessage<Int64Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "types.Int64Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Int64Value {
    return new Int64Value().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Int64Value {
    return new Int64Value().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Int64Value {
    return new Int64Value().fromJsonString(jsonString, options);
  }

  static equals(
    a: Int64Value | PlainMessage<Int64Value> | undefined,
    b: Int64Value | PlainMessage<Int64Value> | undefined,
  ): boolean {
    return proto3.util.equals(Int64Value, a, b);
  }
}

/**
 * @generated from message types.Empty
 */
export class Empty extends Message<Empty> {
  constructor(data?: PartialMessage<Empty>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "types.Empty";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): Empty {
    return new Empty().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): Empty {
    return new Empty().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): Empty {
    return new Empty().fromJsonString(jsonString, options);
  }

  static equals(
    a: Empty | PlainMessage<Empty> | undefined,
    b: Empty | PlainMessage<Empty> | undefined,
  ): boolean {
    return proto3.util.equals(Empty, a, b);
  }
}
