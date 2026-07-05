
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApiCredential
 * 
 */
export type ApiCredential = $Result.DefaultSelection<Prisma.$ApiCredentialPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model App
 * 
 */
export type App = $Result.DefaultSelection<Prisma.$AppPayload>
/**
 * Model TtsApp
 * 
 */
export type TtsApp = $Result.DefaultSelection<Prisma.$TtsAppPayload>
/**
 * Model TtsShop
 * 
 */
export type TtsShop = $Result.DefaultSelection<Prisma.$TtsShopPayload>
/**
 * Model TtsShopAppToken
 * 
 */
export type TtsShopAppToken = $Result.DefaultSelection<Prisma.$TtsShopAppTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ApiCredentials
 * const apiCredentials = await prisma.apiCredential.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ApiCredentials
   * const apiCredentials = await prisma.apiCredential.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apiCredential`: Exposes CRUD operations for the **ApiCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiCredentials
    * const apiCredentials = await prisma.apiCredential.findMany()
    * ```
    */
  get apiCredential(): Prisma.ApiCredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.app`: Exposes CRUD operations for the **App** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.app.findMany()
    * ```
    */
  get app(): Prisma.AppDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ttsApp`: Exposes CRUD operations for the **TtsApp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TtsApps
    * const ttsApps = await prisma.ttsApp.findMany()
    * ```
    */
  get ttsApp(): Prisma.TtsAppDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ttsShop`: Exposes CRUD operations for the **TtsShop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TtsShops
    * const ttsShops = await prisma.ttsShop.findMany()
    * ```
    */
  get ttsShop(): Prisma.TtsShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ttsShopAppToken`: Exposes CRUD operations for the **TtsShopAppToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TtsShopAppTokens
    * const ttsShopAppTokens = await prisma.ttsShopAppToken.findMany()
    * ```
    */
  get ttsShopAppToken(): Prisma.TtsShopAppTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ApiCredential: 'ApiCredential',
    Shop: 'Shop',
    App: 'App',
    TtsApp: 'TtsApp',
    TtsShop: 'TtsShop',
    TtsShopAppToken: 'TtsShopAppToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apiCredential" | "shop" | "app" | "ttsApp" | "ttsShop" | "ttsShopAppToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApiCredential: {
        payload: Prisma.$ApiCredentialPayload<ExtArgs>
        fields: Prisma.ApiCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload>
          }
          findFirst: {
            args: Prisma.ApiCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload>
          }
          findMany: {
            args: Prisma.ApiCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload>[]
          }
          create: {
            args: Prisma.ApiCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload>
          }
          createMany: {
            args: Prisma.ApiCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApiCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload>
          }
          update: {
            args: Prisma.ApiCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload>
          }
          deleteMany: {
            args: Prisma.ApiCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApiCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCredentialPayload>
          }
          aggregate: {
            args: Prisma.ApiCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiCredential>
          }
          groupBy: {
            args: Prisma.ApiCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCredentialCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      App: {
        payload: Prisma.$AppPayload<ExtArgs>
        fields: Prisma.AppFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          findFirst: {
            args: Prisma.AppFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          findMany: {
            args: Prisma.AppFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>[]
          }
          create: {
            args: Prisma.AppCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          createMany: {
            args: Prisma.AppCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          update: {
            args: Prisma.AppUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          deleteMany: {
            args: Prisma.AppDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          aggregate: {
            args: Prisma.AppAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp>
          }
          groupBy: {
            args: Prisma.AppGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppCountArgs<ExtArgs>
            result: $Utils.Optional<AppCountAggregateOutputType> | number
          }
        }
      }
      TtsApp: {
        payload: Prisma.$TtsAppPayload<ExtArgs>
        fields: Prisma.TtsAppFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TtsAppFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TtsAppFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload>
          }
          findFirst: {
            args: Prisma.TtsAppFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TtsAppFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload>
          }
          findMany: {
            args: Prisma.TtsAppFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload>[]
          }
          create: {
            args: Prisma.TtsAppCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload>
          }
          createMany: {
            args: Prisma.TtsAppCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TtsAppDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload>
          }
          update: {
            args: Prisma.TtsAppUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload>
          }
          deleteMany: {
            args: Prisma.TtsAppDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TtsAppUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TtsAppUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsAppPayload>
          }
          aggregate: {
            args: Prisma.TtsAppAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTtsApp>
          }
          groupBy: {
            args: Prisma.TtsAppGroupByArgs<ExtArgs>
            result: $Utils.Optional<TtsAppGroupByOutputType>[]
          }
          count: {
            args: Prisma.TtsAppCountArgs<ExtArgs>
            result: $Utils.Optional<TtsAppCountAggregateOutputType> | number
          }
        }
      }
      TtsShop: {
        payload: Prisma.$TtsShopPayload<ExtArgs>
        fields: Prisma.TtsShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TtsShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TtsShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload>
          }
          findFirst: {
            args: Prisma.TtsShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TtsShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload>
          }
          findMany: {
            args: Prisma.TtsShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload>[]
          }
          create: {
            args: Prisma.TtsShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload>
          }
          createMany: {
            args: Prisma.TtsShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TtsShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload>
          }
          update: {
            args: Prisma.TtsShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload>
          }
          deleteMany: {
            args: Prisma.TtsShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TtsShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TtsShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopPayload>
          }
          aggregate: {
            args: Prisma.TtsShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTtsShop>
          }
          groupBy: {
            args: Prisma.TtsShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<TtsShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.TtsShopCountArgs<ExtArgs>
            result: $Utils.Optional<TtsShopCountAggregateOutputType> | number
          }
        }
      }
      TtsShopAppToken: {
        payload: Prisma.$TtsShopAppTokenPayload<ExtArgs>
        fields: Prisma.TtsShopAppTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TtsShopAppTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TtsShopAppTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload>
          }
          findFirst: {
            args: Prisma.TtsShopAppTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TtsShopAppTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload>
          }
          findMany: {
            args: Prisma.TtsShopAppTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload>[]
          }
          create: {
            args: Prisma.TtsShopAppTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload>
          }
          createMany: {
            args: Prisma.TtsShopAppTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TtsShopAppTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload>
          }
          update: {
            args: Prisma.TtsShopAppTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload>
          }
          deleteMany: {
            args: Prisma.TtsShopAppTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TtsShopAppTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TtsShopAppTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TtsShopAppTokenPayload>
          }
          aggregate: {
            args: Prisma.TtsShopAppTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTtsShopAppToken>
          }
          groupBy: {
            args: Prisma.TtsShopAppTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TtsShopAppTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TtsShopAppTokenCountArgs<ExtArgs>
            result: $Utils.Optional<TtsShopAppTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    apiCredential?: ApiCredentialOmit
    shop?: ShopOmit
    app?: AppOmit
    ttsApp?: TtsAppOmit
    ttsShop?: TtsShopOmit
    ttsShopAppToken?: TtsShopAppTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TtsAppCountOutputType
   */

  export type TtsAppCountOutputType = {
    tokens: number
  }

  export type TtsAppCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | TtsAppCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * TtsAppCountOutputType without action
   */
  export type TtsAppCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsAppCountOutputType
     */
    select?: TtsAppCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TtsAppCountOutputType without action
   */
  export type TtsAppCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TtsShopAppTokenWhereInput
  }


  /**
   * Count Type TtsShopCountOutputType
   */

  export type TtsShopCountOutputType = {
    tokens: number
  }

  export type TtsShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | TtsShopCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * TtsShopCountOutputType without action
   */
  export type TtsShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopCountOutputType
     */
    select?: TtsShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TtsShopCountOutputType without action
   */
  export type TtsShopCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TtsShopAppTokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ApiCredential
   */

  export type AggregateApiCredential = {
    _count: ApiCredentialCountAggregateOutputType | null
    _avg: ApiCredentialAvgAggregateOutputType | null
    _sum: ApiCredentialSumAggregateOutputType | null
    _min: ApiCredentialMinAggregateOutputType | null
    _max: ApiCredentialMaxAggregateOutputType | null
  }

  export type ApiCredentialAvgAggregateOutputType = {
    id: number | null
    access_token_expire_in: number | null
    refresh_token_expire_in: number | null
    user_type: number | null
  }

  export type ApiCredentialSumAggregateOutputType = {
    id: number | null
    access_token_expire_in: bigint | null
    refresh_token_expire_in: bigint | null
    user_type: number | null
  }

  export type ApiCredentialMinAggregateOutputType = {
    id: number | null
    app_key: string | null
    access_token: string | null
    access_token_expire_in: bigint | null
    refresh_token: string | null
    refresh_token_expire_in: bigint | null
    open_id: string | null
    seller_name: string | null
    seller_base_region: string | null
    user_type: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiCredentialMaxAggregateOutputType = {
    id: number | null
    app_key: string | null
    access_token: string | null
    access_token_expire_in: bigint | null
    refresh_token: string | null
    refresh_token_expire_in: bigint | null
    open_id: string | null
    seller_name: string | null
    seller_base_region: string | null
    user_type: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiCredentialCountAggregateOutputType = {
    id: number
    app_key: number
    access_token: number
    access_token_expire_in: number
    refresh_token: number
    refresh_token_expire_in: number
    open_id: number
    seller_name: number
    seller_base_region: number
    user_type: number
    granted_scopes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiCredentialAvgAggregateInputType = {
    id?: true
    access_token_expire_in?: true
    refresh_token_expire_in?: true
    user_type?: true
  }

  export type ApiCredentialSumAggregateInputType = {
    id?: true
    access_token_expire_in?: true
    refresh_token_expire_in?: true
    user_type?: true
  }

  export type ApiCredentialMinAggregateInputType = {
    id?: true
    app_key?: true
    access_token?: true
    access_token_expire_in?: true
    refresh_token?: true
    refresh_token_expire_in?: true
    open_id?: true
    seller_name?: true
    seller_base_region?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiCredentialMaxAggregateInputType = {
    id?: true
    app_key?: true
    access_token?: true
    access_token_expire_in?: true
    refresh_token?: true
    refresh_token_expire_in?: true
    open_id?: true
    seller_name?: true
    seller_base_region?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiCredentialCountAggregateInputType = {
    id?: true
    app_key?: true
    access_token?: true
    access_token_expire_in?: true
    refresh_token?: true
    refresh_token_expire_in?: true
    open_id?: true
    seller_name?: true
    seller_base_region?: true
    user_type?: true
    granted_scopes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCredential to aggregate.
     */
    where?: ApiCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCredentials to fetch.
     */
    orderBy?: ApiCredentialOrderByWithRelationInput | ApiCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiCredentials
    **/
    _count?: true | ApiCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiCredentialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiCredentialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiCredentialMaxAggregateInputType
  }

  export type GetApiCredentialAggregateType<T extends ApiCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateApiCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiCredential[P]>
      : GetScalarType<T[P], AggregateApiCredential[P]>
  }




  export type ApiCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCredentialWhereInput
    orderBy?: ApiCredentialOrderByWithAggregationInput | ApiCredentialOrderByWithAggregationInput[]
    by: ApiCredentialScalarFieldEnum[] | ApiCredentialScalarFieldEnum
    having?: ApiCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCredentialCountAggregateInputType | true
    _avg?: ApiCredentialAvgAggregateInputType
    _sum?: ApiCredentialSumAggregateInputType
    _min?: ApiCredentialMinAggregateInputType
    _max?: ApiCredentialMaxAggregateInputType
  }

  export type ApiCredentialGroupByOutputType = {
    id: number
    app_key: string
    access_token: string
    access_token_expire_in: bigint
    refresh_token: string
    refresh_token_expire_in: bigint
    open_id: string
    seller_name: string
    seller_base_region: string
    user_type: number
    granted_scopes: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ApiCredentialCountAggregateOutputType | null
    _avg: ApiCredentialAvgAggregateOutputType | null
    _sum: ApiCredentialSumAggregateOutputType | null
    _min: ApiCredentialMinAggregateOutputType | null
    _max: ApiCredentialMaxAggregateOutputType | null
  }

  type GetApiCredentialGroupByPayload<T extends ApiCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], ApiCredentialGroupByOutputType[P]>
        }
      >
    >


  export type ApiCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_key?: boolean
    access_token?: boolean
    access_token_expire_in?: boolean
    refresh_token?: boolean
    refresh_token_expire_in?: boolean
    open_id?: boolean
    seller_name?: boolean
    seller_base_region?: boolean
    user_type?: boolean
    granted_scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["apiCredential"]>



  export type ApiCredentialSelectScalar = {
    id?: boolean
    app_key?: boolean
    access_token?: boolean
    access_token_expire_in?: boolean
    refresh_token?: boolean
    refresh_token_expire_in?: boolean
    open_id?: boolean
    seller_name?: boolean
    seller_base_region?: boolean
    user_type?: boolean
    granted_scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiCredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "app_key" | "access_token" | "access_token_expire_in" | "refresh_token" | "refresh_token_expire_in" | "open_id" | "seller_name" | "seller_base_region" | "user_type" | "granted_scopes" | "createdAt" | "updatedAt", ExtArgs["result"]["apiCredential"]>

  export type $ApiCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiCredential"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      app_key: string
      access_token: string
      access_token_expire_in: bigint
      refresh_token: string
      refresh_token_expire_in: bigint
      open_id: string
      seller_name: string
      seller_base_region: string
      user_type: number
      granted_scopes: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiCredential"]>
    composites: {}
  }

  type ApiCredentialGetPayload<S extends boolean | null | undefined | ApiCredentialDefaultArgs> = $Result.GetResult<Prisma.$ApiCredentialPayload, S>

  type ApiCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCredentialCountAggregateInputType | true
    }

  export interface ApiCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiCredential'], meta: { name: 'ApiCredential' } }
    /**
     * Find zero or one ApiCredential that matches the filter.
     * @param {ApiCredentialFindUniqueArgs} args - Arguments to find a ApiCredential
     * @example
     * // Get one ApiCredential
     * const apiCredential = await prisma.apiCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiCredentialFindUniqueArgs>(args: SelectSubset<T, ApiCredentialFindUniqueArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiCredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiCredentialFindUniqueOrThrowArgs} args - Arguments to find a ApiCredential
     * @example
     * // Get one ApiCredential
     * const apiCredential = await prisma.apiCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCredentialFindFirstArgs} args - Arguments to find a ApiCredential
     * @example
     * // Get one ApiCredential
     * const apiCredential = await prisma.apiCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiCredentialFindFirstArgs>(args?: SelectSubset<T, ApiCredentialFindFirstArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCredentialFindFirstOrThrowArgs} args - Arguments to find a ApiCredential
     * @example
     * // Get one ApiCredential
     * const apiCredential = await prisma.apiCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiCredentials
     * const apiCredentials = await prisma.apiCredential.findMany()
     * 
     * // Get first 10 ApiCredentials
     * const apiCredentials = await prisma.apiCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiCredentialWithIdOnly = await prisma.apiCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiCredentialFindManyArgs>(args?: SelectSubset<T, ApiCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiCredential.
     * @param {ApiCredentialCreateArgs} args - Arguments to create a ApiCredential.
     * @example
     * // Create one ApiCredential
     * const ApiCredential = await prisma.apiCredential.create({
     *   data: {
     *     // ... data to create a ApiCredential
     *   }
     * })
     * 
     */
    create<T extends ApiCredentialCreateArgs>(args: SelectSubset<T, ApiCredentialCreateArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiCredentials.
     * @param {ApiCredentialCreateManyArgs} args - Arguments to create many ApiCredentials.
     * @example
     * // Create many ApiCredentials
     * const apiCredential = await prisma.apiCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCredentialCreateManyArgs>(args?: SelectSubset<T, ApiCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApiCredential.
     * @param {ApiCredentialDeleteArgs} args - Arguments to delete one ApiCredential.
     * @example
     * // Delete one ApiCredential
     * const ApiCredential = await prisma.apiCredential.delete({
     *   where: {
     *     // ... filter to delete one ApiCredential
     *   }
     * })
     * 
     */
    delete<T extends ApiCredentialDeleteArgs>(args: SelectSubset<T, ApiCredentialDeleteArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiCredential.
     * @param {ApiCredentialUpdateArgs} args - Arguments to update one ApiCredential.
     * @example
     * // Update one ApiCredential
     * const apiCredential = await prisma.apiCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiCredentialUpdateArgs>(args: SelectSubset<T, ApiCredentialUpdateArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiCredentials.
     * @param {ApiCredentialDeleteManyArgs} args - Arguments to filter ApiCredentials to delete.
     * @example
     * // Delete a few ApiCredentials
     * const { count } = await prisma.apiCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiCredentialDeleteManyArgs>(args?: SelectSubset<T, ApiCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiCredentials
     * const apiCredential = await prisma.apiCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiCredentialUpdateManyArgs>(args: SelectSubset<T, ApiCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiCredential.
     * @param {ApiCredentialUpsertArgs} args - Arguments to update or create a ApiCredential.
     * @example
     * // Update or create a ApiCredential
     * const apiCredential = await prisma.apiCredential.upsert({
     *   create: {
     *     // ... data to create a ApiCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiCredential we want to update
     *   }
     * })
     */
    upsert<T extends ApiCredentialUpsertArgs>(args: SelectSubset<T, ApiCredentialUpsertArgs<ExtArgs>>): Prisma__ApiCredentialClient<$Result.GetResult<Prisma.$ApiCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCredentialCountArgs} args - Arguments to filter ApiCredentials to count.
     * @example
     * // Count the number of ApiCredentials
     * const count = await prisma.apiCredential.count({
     *   where: {
     *     // ... the filter for the ApiCredentials we want to count
     *   }
     * })
    **/
    count<T extends ApiCredentialCountArgs>(
      args?: Subset<T, ApiCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiCredentialAggregateArgs>(args: Subset<T, ApiCredentialAggregateArgs>): Prisma.PrismaPromise<GetApiCredentialAggregateType<T>>

    /**
     * Group by ApiCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCredentialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiCredentialGroupByArgs['orderBy'] }
        : { orderBy?: ApiCredentialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiCredential model
   */
  readonly fields: ApiCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiCredential model
   */
  interface ApiCredentialFieldRefs {
    readonly id: FieldRef<"ApiCredential", 'Int'>
    readonly app_key: FieldRef<"ApiCredential", 'String'>
    readonly access_token: FieldRef<"ApiCredential", 'String'>
    readonly access_token_expire_in: FieldRef<"ApiCredential", 'BigInt'>
    readonly refresh_token: FieldRef<"ApiCredential", 'String'>
    readonly refresh_token_expire_in: FieldRef<"ApiCredential", 'BigInt'>
    readonly open_id: FieldRef<"ApiCredential", 'String'>
    readonly seller_name: FieldRef<"ApiCredential", 'String'>
    readonly seller_base_region: FieldRef<"ApiCredential", 'String'>
    readonly user_type: FieldRef<"ApiCredential", 'Int'>
    readonly granted_scopes: FieldRef<"ApiCredential", 'Json'>
    readonly createdAt: FieldRef<"ApiCredential", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiCredential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiCredential findUnique
   */
  export type ApiCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * Filter, which ApiCredential to fetch.
     */
    where: ApiCredentialWhereUniqueInput
  }

  /**
   * ApiCredential findUniqueOrThrow
   */
  export type ApiCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * Filter, which ApiCredential to fetch.
     */
    where: ApiCredentialWhereUniqueInput
  }

  /**
   * ApiCredential findFirst
   */
  export type ApiCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * Filter, which ApiCredential to fetch.
     */
    where?: ApiCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCredentials to fetch.
     */
    orderBy?: ApiCredentialOrderByWithRelationInput | ApiCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCredentials.
     */
    cursor?: ApiCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCredentials.
     */
    distinct?: ApiCredentialScalarFieldEnum | ApiCredentialScalarFieldEnum[]
  }

  /**
   * ApiCredential findFirstOrThrow
   */
  export type ApiCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * Filter, which ApiCredential to fetch.
     */
    where?: ApiCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCredentials to fetch.
     */
    orderBy?: ApiCredentialOrderByWithRelationInput | ApiCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCredentials.
     */
    cursor?: ApiCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCredentials.
     */
    distinct?: ApiCredentialScalarFieldEnum | ApiCredentialScalarFieldEnum[]
  }

  /**
   * ApiCredential findMany
   */
  export type ApiCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * Filter, which ApiCredentials to fetch.
     */
    where?: ApiCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCredentials to fetch.
     */
    orderBy?: ApiCredentialOrderByWithRelationInput | ApiCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiCredentials.
     */
    cursor?: ApiCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCredentials.
     */
    distinct?: ApiCredentialScalarFieldEnum | ApiCredentialScalarFieldEnum[]
  }

  /**
   * ApiCredential create
   */
  export type ApiCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiCredential.
     */
    data: XOR<ApiCredentialCreateInput, ApiCredentialUncheckedCreateInput>
  }

  /**
   * ApiCredential createMany
   */
  export type ApiCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiCredentials.
     */
    data: ApiCredentialCreateManyInput | ApiCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiCredential update
   */
  export type ApiCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiCredential.
     */
    data: XOR<ApiCredentialUpdateInput, ApiCredentialUncheckedUpdateInput>
    /**
     * Choose, which ApiCredential to update.
     */
    where: ApiCredentialWhereUniqueInput
  }

  /**
   * ApiCredential updateMany
   */
  export type ApiCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiCredentials.
     */
    data: XOR<ApiCredentialUpdateManyMutationInput, ApiCredentialUncheckedUpdateManyInput>
    /**
     * Filter which ApiCredentials to update
     */
    where?: ApiCredentialWhereInput
    /**
     * Limit how many ApiCredentials to update.
     */
    limit?: number
  }

  /**
   * ApiCredential upsert
   */
  export type ApiCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiCredential to update in case it exists.
     */
    where: ApiCredentialWhereUniqueInput
    /**
     * In case the ApiCredential found by the `where` argument doesn't exist, create a new ApiCredential with this data.
     */
    create: XOR<ApiCredentialCreateInput, ApiCredentialUncheckedCreateInput>
    /**
     * In case the ApiCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiCredentialUpdateInput, ApiCredentialUncheckedUpdateInput>
  }

  /**
   * ApiCredential delete
   */
  export type ApiCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
    /**
     * Filter which ApiCredential to delete.
     */
    where: ApiCredentialWhereUniqueInput
  }

  /**
   * ApiCredential deleteMany
   */
  export type ApiCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCredentials to delete
     */
    where?: ApiCredentialWhereInput
    /**
     * Limit how many ApiCredentials to delete.
     */
    limit?: number
  }

  /**
   * ApiCredential without action
   */
  export type ApiCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCredential
     */
    select?: ApiCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCredential
     */
    omit?: ApiCredentialOmit<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: bigint | null
  }

  export type ShopMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    name: string | null
    region: string | null
    seller_type: string | null
    cipher: string | null
  }

  export type ShopMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    name: string | null
    region: string | null
    seller_type: string | null
    cipher: string | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    code: number
    name: number
    region: number
    seller_type: number
    cipher: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    region?: true
    seller_type?: true
    cipher?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    region?: true
    seller_type?: true
    cipher?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    region?: true
    seller_type?: true
    cipher?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: bigint
    code: string
    name: string
    region: string
    seller_type: string
    cipher: string
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    region?: boolean
    seller_type?: boolean
    cipher?: boolean
  }, ExtArgs["result"]["shop"]>



  export type ShopSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    region?: boolean
    seller_type?: boolean
    cipher?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "region" | "seller_type" | "cipher", ExtArgs["result"]["shop"]>

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      code: string
      name: string
      region: string
      seller_type: string
      cipher: string
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'BigInt'>
    readonly code: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly region: FieldRef<"Shop", 'String'>
    readonly seller_type: FieldRef<"Shop", 'String'>
    readonly cipher: FieldRef<"Shop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
  }


  /**
   * Model App
   */

  export type AggregateApp = {
    _count: AppCountAggregateOutputType | null
    _avg: AppAvgAggregateOutputType | null
    _sum: AppSumAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  export type AppAvgAggregateOutputType = {
    id: number | null
  }

  export type AppSumAggregateOutputType = {
    id: number | null
  }

  export type AppMinAggregateOutputType = {
    id: number | null
    app_key: string | null
    app_secret: string | null
    redirect_domain: string | null
    success_path: string | null
    failure_path: string | null
    description: string | null
    auth_url: string | null
  }

  export type AppMaxAggregateOutputType = {
    id: number | null
    app_key: string | null
    app_secret: string | null
    redirect_domain: string | null
    success_path: string | null
    failure_path: string | null
    description: string | null
    auth_url: string | null
  }

  export type AppCountAggregateOutputType = {
    id: number
    app_key: number
    app_secret: number
    redirect_domain: number
    success_path: number
    failure_path: number
    description: number
    auth_url: number
    _all: number
  }


  export type AppAvgAggregateInputType = {
    id?: true
  }

  export type AppSumAggregateInputType = {
    id?: true
  }

  export type AppMinAggregateInputType = {
    id?: true
    app_key?: true
    app_secret?: true
    redirect_domain?: true
    success_path?: true
    failure_path?: true
    description?: true
    auth_url?: true
  }

  export type AppMaxAggregateInputType = {
    id?: true
    app_key?: true
    app_secret?: true
    redirect_domain?: true
    success_path?: true
    failure_path?: true
    description?: true
    auth_url?: true
  }

  export type AppCountAggregateInputType = {
    id?: true
    app_key?: true
    app_secret?: true
    redirect_domain?: true
    success_path?: true
    failure_path?: true
    description?: true
    auth_url?: true
    _all?: true
  }

  export type AppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which App to aggregate.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apps
    **/
    _count?: true | AppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppMaxAggregateInputType
  }

  export type GetAppAggregateType<T extends AppAggregateArgs> = {
        [P in keyof T & keyof AggregateApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp[P]>
      : GetScalarType<T[P], AggregateApp[P]>
  }




  export type AppGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppWhereInput
    orderBy?: AppOrderByWithAggregationInput | AppOrderByWithAggregationInput[]
    by: AppScalarFieldEnum[] | AppScalarFieldEnum
    having?: AppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppCountAggregateInputType | true
    _avg?: AppAvgAggregateInputType
    _sum?: AppSumAggregateInputType
    _min?: AppMinAggregateInputType
    _max?: AppMaxAggregateInputType
  }

  export type AppGroupByOutputType = {
    id: number
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url: string
    _count: AppCountAggregateOutputType | null
    _avg: AppAvgAggregateOutputType | null
    _sum: AppSumAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  type GetAppGroupByPayload<T extends AppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppGroupByOutputType[P]>
            : GetScalarType<T[P], AppGroupByOutputType[P]>
        }
      >
    >


  export type AppSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_key?: boolean
    app_secret?: boolean
    redirect_domain?: boolean
    success_path?: boolean
    failure_path?: boolean
    description?: boolean
    auth_url?: boolean
  }, ExtArgs["result"]["app"]>



  export type AppSelectScalar = {
    id?: boolean
    app_key?: boolean
    app_secret?: boolean
    redirect_domain?: boolean
    success_path?: boolean
    failure_path?: boolean
    description?: boolean
    auth_url?: boolean
  }

  export type AppOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "app_key" | "app_secret" | "redirect_domain" | "success_path" | "failure_path" | "description" | "auth_url", ExtArgs["result"]["app"]>

  export type $AppPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "App"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      app_key: string
      app_secret: string
      redirect_domain: string
      success_path: string
      failure_path: string
      description: string
      auth_url: string
    }, ExtArgs["result"]["app"]>
    composites: {}
  }

  type AppGetPayload<S extends boolean | null | undefined | AppDefaultArgs> = $Result.GetResult<Prisma.$AppPayload, S>

  type AppCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppCountAggregateInputType | true
    }

  export interface AppDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['App'], meta: { name: 'App' } }
    /**
     * Find zero or one App that matches the filter.
     * @param {AppFindUniqueArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppFindUniqueArgs>(args: SelectSubset<T, AppFindUniqueArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one App that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppFindUniqueOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppFindUniqueOrThrowArgs>(args: SelectSubset<T, AppFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppFindFirstArgs>(args?: SelectSubset<T, AppFindFirstArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppFindFirstOrThrowArgs>(args?: SelectSubset<T, AppFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.app.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.app.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appWithIdOnly = await prisma.app.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppFindManyArgs>(args?: SelectSubset<T, AppFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a App.
     * @param {AppCreateArgs} args - Arguments to create a App.
     * @example
     * // Create one App
     * const App = await prisma.app.create({
     *   data: {
     *     // ... data to create a App
     *   }
     * })
     * 
     */
    create<T extends AppCreateArgs>(args: SelectSubset<T, AppCreateArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apps.
     * @param {AppCreateManyArgs} args - Arguments to create many Apps.
     * @example
     * // Create many Apps
     * const app = await prisma.app.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppCreateManyArgs>(args?: SelectSubset<T, AppCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a App.
     * @param {AppDeleteArgs} args - Arguments to delete one App.
     * @example
     * // Delete one App
     * const App = await prisma.app.delete({
     *   where: {
     *     // ... filter to delete one App
     *   }
     * })
     * 
     */
    delete<T extends AppDeleteArgs>(args: SelectSubset<T, AppDeleteArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one App.
     * @param {AppUpdateArgs} args - Arguments to update one App.
     * @example
     * // Update one App
     * const app = await prisma.app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUpdateArgs>(args: SelectSubset<T, AppUpdateArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apps.
     * @param {AppDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppDeleteManyArgs>(args?: SelectSubset<T, AppDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const app = await prisma.app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUpdateManyArgs>(args: SelectSubset<T, AppUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one App.
     * @param {AppUpsertArgs} args - Arguments to update or create a App.
     * @example
     * // Update or create a App
     * const app = await prisma.app.upsert({
     *   create: {
     *     // ... data to create a App
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App we want to update
     *   }
     * })
     */
    upsert<T extends AppUpsertArgs>(args: SelectSubset<T, AppUpsertArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.app.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends AppCountArgs>(
      args?: Subset<T, AppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppAggregateArgs>(args: Subset<T, AppAggregateArgs>): Prisma.PrismaPromise<GetAppAggregateType<T>>

    /**
     * Group by App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppGroupByArgs['orderBy'] }
        : { orderBy?: AppGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the App model
   */
  readonly fields: AppFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for App.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the App model
   */
  interface AppFieldRefs {
    readonly id: FieldRef<"App", 'Int'>
    readonly app_key: FieldRef<"App", 'String'>
    readonly app_secret: FieldRef<"App", 'String'>
    readonly redirect_domain: FieldRef<"App", 'String'>
    readonly success_path: FieldRef<"App", 'String'>
    readonly failure_path: FieldRef<"App", 'String'>
    readonly description: FieldRef<"App", 'String'>
    readonly auth_url: FieldRef<"App", 'String'>
  }
    

  // Custom InputTypes
  /**
   * App findUnique
   */
  export type AppFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App findUniqueOrThrow
   */
  export type AppFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App findFirst
   */
  export type AppFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App findFirstOrThrow
   */
  export type AppFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App findMany
   */
  export type AppFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Filter, which Apps to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App create
   */
  export type AppCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * The data needed to create a App.
     */
    data: XOR<AppCreateInput, AppUncheckedCreateInput>
  }

  /**
   * App createMany
   */
  export type AppCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apps.
     */
    data: AppCreateManyInput | AppCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * App update
   */
  export type AppUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * The data needed to update a App.
     */
    data: XOR<AppUpdateInput, AppUncheckedUpdateInput>
    /**
     * Choose, which App to update.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App updateMany
   */
  export type AppUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apps.
     */
    data: XOR<AppUpdateManyMutationInput, AppUncheckedUpdateManyInput>
    /**
     * Filter which Apps to update
     */
    where?: AppWhereInput
    /**
     * Limit how many Apps to update.
     */
    limit?: number
  }

  /**
   * App upsert
   */
  export type AppUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * The filter to search for the App to update in case it exists.
     */
    where: AppWhereUniqueInput
    /**
     * In case the App found by the `where` argument doesn't exist, create a new App with this data.
     */
    create: XOR<AppCreateInput, AppUncheckedCreateInput>
    /**
     * In case the App was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUpdateInput, AppUncheckedUpdateInput>
  }

  /**
   * App delete
   */
  export type AppDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Filter which App to delete.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App deleteMany
   */
  export type AppDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apps to delete
     */
    where?: AppWhereInput
    /**
     * Limit how many Apps to delete.
     */
    limit?: number
  }

  /**
   * App without action
   */
  export type AppDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
  }


  /**
   * Model TtsApp
   */

  export type AggregateTtsApp = {
    _count: TtsAppCountAggregateOutputType | null
    _avg: TtsAppAvgAggregateOutputType | null
    _sum: TtsAppSumAggregateOutputType | null
    _min: TtsAppMinAggregateOutputType | null
    _max: TtsAppMaxAggregateOutputType | null
  }

  export type TtsAppAvgAggregateOutputType = {
    id: number | null
  }

  export type TtsAppSumAggregateOutputType = {
    id: number | null
  }

  export type TtsAppMinAggregateOutputType = {
    id: number | null
    app_key: string | null
    app_secret: string | null
    redirect_domain: string | null
    success_path: string | null
    failure_path: string | null
    description: string | null
    auth_url: string | null
  }

  export type TtsAppMaxAggregateOutputType = {
    id: number | null
    app_key: string | null
    app_secret: string | null
    redirect_domain: string | null
    success_path: string | null
    failure_path: string | null
    description: string | null
    auth_url: string | null
  }

  export type TtsAppCountAggregateOutputType = {
    id: number
    app_key: number
    app_secret: number
    redirect_domain: number
    success_path: number
    failure_path: number
    description: number
    auth_url: number
    _all: number
  }


  export type TtsAppAvgAggregateInputType = {
    id?: true
  }

  export type TtsAppSumAggregateInputType = {
    id?: true
  }

  export type TtsAppMinAggregateInputType = {
    id?: true
    app_key?: true
    app_secret?: true
    redirect_domain?: true
    success_path?: true
    failure_path?: true
    description?: true
    auth_url?: true
  }

  export type TtsAppMaxAggregateInputType = {
    id?: true
    app_key?: true
    app_secret?: true
    redirect_domain?: true
    success_path?: true
    failure_path?: true
    description?: true
    auth_url?: true
  }

  export type TtsAppCountAggregateInputType = {
    id?: true
    app_key?: true
    app_secret?: true
    redirect_domain?: true
    success_path?: true
    failure_path?: true
    description?: true
    auth_url?: true
    _all?: true
  }

  export type TtsAppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TtsApp to aggregate.
     */
    where?: TtsAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsApps to fetch.
     */
    orderBy?: TtsAppOrderByWithRelationInput | TtsAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TtsAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TtsApps
    **/
    _count?: true | TtsAppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TtsAppAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TtsAppSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TtsAppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TtsAppMaxAggregateInputType
  }

  export type GetTtsAppAggregateType<T extends TtsAppAggregateArgs> = {
        [P in keyof T & keyof AggregateTtsApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTtsApp[P]>
      : GetScalarType<T[P], AggregateTtsApp[P]>
  }




  export type TtsAppGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TtsAppWhereInput
    orderBy?: TtsAppOrderByWithAggregationInput | TtsAppOrderByWithAggregationInput[]
    by: TtsAppScalarFieldEnum[] | TtsAppScalarFieldEnum
    having?: TtsAppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TtsAppCountAggregateInputType | true
    _avg?: TtsAppAvgAggregateInputType
    _sum?: TtsAppSumAggregateInputType
    _min?: TtsAppMinAggregateInputType
    _max?: TtsAppMaxAggregateInputType
  }

  export type TtsAppGroupByOutputType = {
    id: number
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url: string
    _count: TtsAppCountAggregateOutputType | null
    _avg: TtsAppAvgAggregateOutputType | null
    _sum: TtsAppSumAggregateOutputType | null
    _min: TtsAppMinAggregateOutputType | null
    _max: TtsAppMaxAggregateOutputType | null
  }

  type GetTtsAppGroupByPayload<T extends TtsAppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TtsAppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TtsAppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TtsAppGroupByOutputType[P]>
            : GetScalarType<T[P], TtsAppGroupByOutputType[P]>
        }
      >
    >


  export type TtsAppSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    app_key?: boolean
    app_secret?: boolean
    redirect_domain?: boolean
    success_path?: boolean
    failure_path?: boolean
    description?: boolean
    auth_url?: boolean
    tokens?: boolean | TtsApp$tokensArgs<ExtArgs>
    _count?: boolean | TtsAppCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ttsApp"]>



  export type TtsAppSelectScalar = {
    id?: boolean
    app_key?: boolean
    app_secret?: boolean
    redirect_domain?: boolean
    success_path?: boolean
    failure_path?: boolean
    description?: boolean
    auth_url?: boolean
  }

  export type TtsAppOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "app_key" | "app_secret" | "redirect_domain" | "success_path" | "failure_path" | "description" | "auth_url", ExtArgs["result"]["ttsApp"]>
  export type TtsAppInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | TtsApp$tokensArgs<ExtArgs>
    _count?: boolean | TtsAppCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TtsAppPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TtsApp"
    objects: {
      tokens: Prisma.$TtsShopAppTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      app_key: string
      app_secret: string
      redirect_domain: string
      success_path: string
      failure_path: string
      description: string
      auth_url: string
    }, ExtArgs["result"]["ttsApp"]>
    composites: {}
  }

  type TtsAppGetPayload<S extends boolean | null | undefined | TtsAppDefaultArgs> = $Result.GetResult<Prisma.$TtsAppPayload, S>

  type TtsAppCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TtsAppFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TtsAppCountAggregateInputType | true
    }

  export interface TtsAppDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TtsApp'], meta: { name: 'TtsApp' } }
    /**
     * Find zero or one TtsApp that matches the filter.
     * @param {TtsAppFindUniqueArgs} args - Arguments to find a TtsApp
     * @example
     * // Get one TtsApp
     * const ttsApp = await prisma.ttsApp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TtsAppFindUniqueArgs>(args: SelectSubset<T, TtsAppFindUniqueArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TtsApp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TtsAppFindUniqueOrThrowArgs} args - Arguments to find a TtsApp
     * @example
     * // Get one TtsApp
     * const ttsApp = await prisma.ttsApp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TtsAppFindUniqueOrThrowArgs>(args: SelectSubset<T, TtsAppFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TtsApp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsAppFindFirstArgs} args - Arguments to find a TtsApp
     * @example
     * // Get one TtsApp
     * const ttsApp = await prisma.ttsApp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TtsAppFindFirstArgs>(args?: SelectSubset<T, TtsAppFindFirstArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TtsApp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsAppFindFirstOrThrowArgs} args - Arguments to find a TtsApp
     * @example
     * // Get one TtsApp
     * const ttsApp = await prisma.ttsApp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TtsAppFindFirstOrThrowArgs>(args?: SelectSubset<T, TtsAppFindFirstOrThrowArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TtsApps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsAppFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TtsApps
     * const ttsApps = await prisma.ttsApp.findMany()
     * 
     * // Get first 10 TtsApps
     * const ttsApps = await prisma.ttsApp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ttsAppWithIdOnly = await prisma.ttsApp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TtsAppFindManyArgs>(args?: SelectSubset<T, TtsAppFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TtsApp.
     * @param {TtsAppCreateArgs} args - Arguments to create a TtsApp.
     * @example
     * // Create one TtsApp
     * const TtsApp = await prisma.ttsApp.create({
     *   data: {
     *     // ... data to create a TtsApp
     *   }
     * })
     * 
     */
    create<T extends TtsAppCreateArgs>(args: SelectSubset<T, TtsAppCreateArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TtsApps.
     * @param {TtsAppCreateManyArgs} args - Arguments to create many TtsApps.
     * @example
     * // Create many TtsApps
     * const ttsApp = await prisma.ttsApp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TtsAppCreateManyArgs>(args?: SelectSubset<T, TtsAppCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TtsApp.
     * @param {TtsAppDeleteArgs} args - Arguments to delete one TtsApp.
     * @example
     * // Delete one TtsApp
     * const TtsApp = await prisma.ttsApp.delete({
     *   where: {
     *     // ... filter to delete one TtsApp
     *   }
     * })
     * 
     */
    delete<T extends TtsAppDeleteArgs>(args: SelectSubset<T, TtsAppDeleteArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TtsApp.
     * @param {TtsAppUpdateArgs} args - Arguments to update one TtsApp.
     * @example
     * // Update one TtsApp
     * const ttsApp = await prisma.ttsApp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TtsAppUpdateArgs>(args: SelectSubset<T, TtsAppUpdateArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TtsApps.
     * @param {TtsAppDeleteManyArgs} args - Arguments to filter TtsApps to delete.
     * @example
     * // Delete a few TtsApps
     * const { count } = await prisma.ttsApp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TtsAppDeleteManyArgs>(args?: SelectSubset<T, TtsAppDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TtsApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsAppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TtsApps
     * const ttsApp = await prisma.ttsApp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TtsAppUpdateManyArgs>(args: SelectSubset<T, TtsAppUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TtsApp.
     * @param {TtsAppUpsertArgs} args - Arguments to update or create a TtsApp.
     * @example
     * // Update or create a TtsApp
     * const ttsApp = await prisma.ttsApp.upsert({
     *   create: {
     *     // ... data to create a TtsApp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TtsApp we want to update
     *   }
     * })
     */
    upsert<T extends TtsAppUpsertArgs>(args: SelectSubset<T, TtsAppUpsertArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TtsApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsAppCountArgs} args - Arguments to filter TtsApps to count.
     * @example
     * // Count the number of TtsApps
     * const count = await prisma.ttsApp.count({
     *   where: {
     *     // ... the filter for the TtsApps we want to count
     *   }
     * })
    **/
    count<T extends TtsAppCountArgs>(
      args?: Subset<T, TtsAppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TtsAppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TtsApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsAppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TtsAppAggregateArgs>(args: Subset<T, TtsAppAggregateArgs>): Prisma.PrismaPromise<GetTtsAppAggregateType<T>>

    /**
     * Group by TtsApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsAppGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TtsAppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TtsAppGroupByArgs['orderBy'] }
        : { orderBy?: TtsAppGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TtsAppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTtsAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TtsApp model
   */
  readonly fields: TtsAppFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TtsApp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TtsAppClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends TtsApp$tokensArgs<ExtArgs> = {}>(args?: Subset<T, TtsApp$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TtsApp model
   */
  interface TtsAppFieldRefs {
    readonly id: FieldRef<"TtsApp", 'Int'>
    readonly app_key: FieldRef<"TtsApp", 'String'>
    readonly app_secret: FieldRef<"TtsApp", 'String'>
    readonly redirect_domain: FieldRef<"TtsApp", 'String'>
    readonly success_path: FieldRef<"TtsApp", 'String'>
    readonly failure_path: FieldRef<"TtsApp", 'String'>
    readonly description: FieldRef<"TtsApp", 'String'>
    readonly auth_url: FieldRef<"TtsApp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TtsApp findUnique
   */
  export type TtsAppFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * Filter, which TtsApp to fetch.
     */
    where: TtsAppWhereUniqueInput
  }

  /**
   * TtsApp findUniqueOrThrow
   */
  export type TtsAppFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * Filter, which TtsApp to fetch.
     */
    where: TtsAppWhereUniqueInput
  }

  /**
   * TtsApp findFirst
   */
  export type TtsAppFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * Filter, which TtsApp to fetch.
     */
    where?: TtsAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsApps to fetch.
     */
    orderBy?: TtsAppOrderByWithRelationInput | TtsAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TtsApps.
     */
    cursor?: TtsAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsApps.
     */
    distinct?: TtsAppScalarFieldEnum | TtsAppScalarFieldEnum[]
  }

  /**
   * TtsApp findFirstOrThrow
   */
  export type TtsAppFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * Filter, which TtsApp to fetch.
     */
    where?: TtsAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsApps to fetch.
     */
    orderBy?: TtsAppOrderByWithRelationInput | TtsAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TtsApps.
     */
    cursor?: TtsAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsApps.
     */
    distinct?: TtsAppScalarFieldEnum | TtsAppScalarFieldEnum[]
  }

  /**
   * TtsApp findMany
   */
  export type TtsAppFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * Filter, which TtsApps to fetch.
     */
    where?: TtsAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsApps to fetch.
     */
    orderBy?: TtsAppOrderByWithRelationInput | TtsAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TtsApps.
     */
    cursor?: TtsAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsApps.
     */
    distinct?: TtsAppScalarFieldEnum | TtsAppScalarFieldEnum[]
  }

  /**
   * TtsApp create
   */
  export type TtsAppCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * The data needed to create a TtsApp.
     */
    data: XOR<TtsAppCreateInput, TtsAppUncheckedCreateInput>
  }

  /**
   * TtsApp createMany
   */
  export type TtsAppCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TtsApps.
     */
    data: TtsAppCreateManyInput | TtsAppCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TtsApp update
   */
  export type TtsAppUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * The data needed to update a TtsApp.
     */
    data: XOR<TtsAppUpdateInput, TtsAppUncheckedUpdateInput>
    /**
     * Choose, which TtsApp to update.
     */
    where: TtsAppWhereUniqueInput
  }

  /**
   * TtsApp updateMany
   */
  export type TtsAppUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TtsApps.
     */
    data: XOR<TtsAppUpdateManyMutationInput, TtsAppUncheckedUpdateManyInput>
    /**
     * Filter which TtsApps to update
     */
    where?: TtsAppWhereInput
    /**
     * Limit how many TtsApps to update.
     */
    limit?: number
  }

  /**
   * TtsApp upsert
   */
  export type TtsAppUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * The filter to search for the TtsApp to update in case it exists.
     */
    where: TtsAppWhereUniqueInput
    /**
     * In case the TtsApp found by the `where` argument doesn't exist, create a new TtsApp with this data.
     */
    create: XOR<TtsAppCreateInput, TtsAppUncheckedCreateInput>
    /**
     * In case the TtsApp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TtsAppUpdateInput, TtsAppUncheckedUpdateInput>
  }

  /**
   * TtsApp delete
   */
  export type TtsAppDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
    /**
     * Filter which TtsApp to delete.
     */
    where: TtsAppWhereUniqueInput
  }

  /**
   * TtsApp deleteMany
   */
  export type TtsAppDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TtsApps to delete
     */
    where?: TtsAppWhereInput
    /**
     * Limit how many TtsApps to delete.
     */
    limit?: number
  }

  /**
   * TtsApp.tokens
   */
  export type TtsApp$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    where?: TtsShopAppTokenWhereInput
    orderBy?: TtsShopAppTokenOrderByWithRelationInput | TtsShopAppTokenOrderByWithRelationInput[]
    cursor?: TtsShopAppTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TtsShopAppTokenScalarFieldEnum | TtsShopAppTokenScalarFieldEnum[]
  }

  /**
   * TtsApp without action
   */
  export type TtsAppDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsApp
     */
    select?: TtsAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsApp
     */
    omit?: TtsAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsAppInclude<ExtArgs> | null
  }


  /**
   * Model TtsShop
   */

  export type AggregateTtsShop = {
    _count: TtsShopCountAggregateOutputType | null
    _avg: TtsShopAvgAggregateOutputType | null
    _sum: TtsShopSumAggregateOutputType | null
    _min: TtsShopMinAggregateOutputType | null
    _max: TtsShopMaxAggregateOutputType | null
  }

  export type TtsShopAvgAggregateOutputType = {
    id: number | null
  }

  export type TtsShopSumAggregateOutputType = {
    id: bigint | null
  }

  export type TtsShopMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    encrypt_key: string | null
    code: string | null
    name: string | null
    region: string | null
    seller_type: string | null
    cipher: string | null
    is_active: boolean | null
  }

  export type TtsShopMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    encrypt_key: string | null
    code: string | null
    name: string | null
    region: string | null
    seller_type: string | null
    cipher: string | null
    is_active: boolean | null
  }

  export type TtsShopCountAggregateOutputType = {
    id: number
    slug: number
    encrypt_key: number
    code: number
    name: number
    region: number
    seller_type: number
    cipher: number
    is_active: number
    _all: number
  }


  export type TtsShopAvgAggregateInputType = {
    id?: true
  }

  export type TtsShopSumAggregateInputType = {
    id?: true
  }

  export type TtsShopMinAggregateInputType = {
    id?: true
    slug?: true
    encrypt_key?: true
    code?: true
    name?: true
    region?: true
    seller_type?: true
    cipher?: true
    is_active?: true
  }

  export type TtsShopMaxAggregateInputType = {
    id?: true
    slug?: true
    encrypt_key?: true
    code?: true
    name?: true
    region?: true
    seller_type?: true
    cipher?: true
    is_active?: true
  }

  export type TtsShopCountAggregateInputType = {
    id?: true
    slug?: true
    encrypt_key?: true
    code?: true
    name?: true
    region?: true
    seller_type?: true
    cipher?: true
    is_active?: true
    _all?: true
  }

  export type TtsShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TtsShop to aggregate.
     */
    where?: TtsShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShops to fetch.
     */
    orderBy?: TtsShopOrderByWithRelationInput | TtsShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TtsShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TtsShops
    **/
    _count?: true | TtsShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TtsShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TtsShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TtsShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TtsShopMaxAggregateInputType
  }

  export type GetTtsShopAggregateType<T extends TtsShopAggregateArgs> = {
        [P in keyof T & keyof AggregateTtsShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTtsShop[P]>
      : GetScalarType<T[P], AggregateTtsShop[P]>
  }




  export type TtsShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TtsShopWhereInput
    orderBy?: TtsShopOrderByWithAggregationInput | TtsShopOrderByWithAggregationInput[]
    by: TtsShopScalarFieldEnum[] | TtsShopScalarFieldEnum
    having?: TtsShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TtsShopCountAggregateInputType | true
    _avg?: TtsShopAvgAggregateInputType
    _sum?: TtsShopSumAggregateInputType
    _min?: TtsShopMinAggregateInputType
    _max?: TtsShopMaxAggregateInputType
  }

  export type TtsShopGroupByOutputType = {
    id: bigint
    slug: string | null
    encrypt_key: string | null
    code: string
    name: string
    region: string
    seller_type: string
    cipher: string
    is_active: boolean
    _count: TtsShopCountAggregateOutputType | null
    _avg: TtsShopAvgAggregateOutputType | null
    _sum: TtsShopSumAggregateOutputType | null
    _min: TtsShopMinAggregateOutputType | null
    _max: TtsShopMaxAggregateOutputType | null
  }

  type GetTtsShopGroupByPayload<T extends TtsShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TtsShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TtsShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TtsShopGroupByOutputType[P]>
            : GetScalarType<T[P], TtsShopGroupByOutputType[P]>
        }
      >
    >


  export type TtsShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    encrypt_key?: boolean
    code?: boolean
    name?: boolean
    region?: boolean
    seller_type?: boolean
    cipher?: boolean
    is_active?: boolean
    tokens?: boolean | TtsShop$tokensArgs<ExtArgs>
    _count?: boolean | TtsShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ttsShop"]>



  export type TtsShopSelectScalar = {
    id?: boolean
    slug?: boolean
    encrypt_key?: boolean
    code?: boolean
    name?: boolean
    region?: boolean
    seller_type?: boolean
    cipher?: boolean
    is_active?: boolean
  }

  export type TtsShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "encrypt_key" | "code" | "name" | "region" | "seller_type" | "cipher" | "is_active", ExtArgs["result"]["ttsShop"]>
  export type TtsShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | TtsShop$tokensArgs<ExtArgs>
    _count?: boolean | TtsShopCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TtsShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TtsShop"
    objects: {
      tokens: Prisma.$TtsShopAppTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string | null
      encrypt_key: string | null
      code: string
      name: string
      region: string
      seller_type: string
      cipher: string
      is_active: boolean
    }, ExtArgs["result"]["ttsShop"]>
    composites: {}
  }

  type TtsShopGetPayload<S extends boolean | null | undefined | TtsShopDefaultArgs> = $Result.GetResult<Prisma.$TtsShopPayload, S>

  type TtsShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TtsShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TtsShopCountAggregateInputType | true
    }

  export interface TtsShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TtsShop'], meta: { name: 'TtsShop' } }
    /**
     * Find zero or one TtsShop that matches the filter.
     * @param {TtsShopFindUniqueArgs} args - Arguments to find a TtsShop
     * @example
     * // Get one TtsShop
     * const ttsShop = await prisma.ttsShop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TtsShopFindUniqueArgs>(args: SelectSubset<T, TtsShopFindUniqueArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TtsShop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TtsShopFindUniqueOrThrowArgs} args - Arguments to find a TtsShop
     * @example
     * // Get one TtsShop
     * const ttsShop = await prisma.ttsShop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TtsShopFindUniqueOrThrowArgs>(args: SelectSubset<T, TtsShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TtsShop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopFindFirstArgs} args - Arguments to find a TtsShop
     * @example
     * // Get one TtsShop
     * const ttsShop = await prisma.ttsShop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TtsShopFindFirstArgs>(args?: SelectSubset<T, TtsShopFindFirstArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TtsShop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopFindFirstOrThrowArgs} args - Arguments to find a TtsShop
     * @example
     * // Get one TtsShop
     * const ttsShop = await prisma.ttsShop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TtsShopFindFirstOrThrowArgs>(args?: SelectSubset<T, TtsShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TtsShops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TtsShops
     * const ttsShops = await prisma.ttsShop.findMany()
     * 
     * // Get first 10 TtsShops
     * const ttsShops = await prisma.ttsShop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ttsShopWithIdOnly = await prisma.ttsShop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TtsShopFindManyArgs>(args?: SelectSubset<T, TtsShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TtsShop.
     * @param {TtsShopCreateArgs} args - Arguments to create a TtsShop.
     * @example
     * // Create one TtsShop
     * const TtsShop = await prisma.ttsShop.create({
     *   data: {
     *     // ... data to create a TtsShop
     *   }
     * })
     * 
     */
    create<T extends TtsShopCreateArgs>(args: SelectSubset<T, TtsShopCreateArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TtsShops.
     * @param {TtsShopCreateManyArgs} args - Arguments to create many TtsShops.
     * @example
     * // Create many TtsShops
     * const ttsShop = await prisma.ttsShop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TtsShopCreateManyArgs>(args?: SelectSubset<T, TtsShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TtsShop.
     * @param {TtsShopDeleteArgs} args - Arguments to delete one TtsShop.
     * @example
     * // Delete one TtsShop
     * const TtsShop = await prisma.ttsShop.delete({
     *   where: {
     *     // ... filter to delete one TtsShop
     *   }
     * })
     * 
     */
    delete<T extends TtsShopDeleteArgs>(args: SelectSubset<T, TtsShopDeleteArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TtsShop.
     * @param {TtsShopUpdateArgs} args - Arguments to update one TtsShop.
     * @example
     * // Update one TtsShop
     * const ttsShop = await prisma.ttsShop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TtsShopUpdateArgs>(args: SelectSubset<T, TtsShopUpdateArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TtsShops.
     * @param {TtsShopDeleteManyArgs} args - Arguments to filter TtsShops to delete.
     * @example
     * // Delete a few TtsShops
     * const { count } = await prisma.ttsShop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TtsShopDeleteManyArgs>(args?: SelectSubset<T, TtsShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TtsShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TtsShops
     * const ttsShop = await prisma.ttsShop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TtsShopUpdateManyArgs>(args: SelectSubset<T, TtsShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TtsShop.
     * @param {TtsShopUpsertArgs} args - Arguments to update or create a TtsShop.
     * @example
     * // Update or create a TtsShop
     * const ttsShop = await prisma.ttsShop.upsert({
     *   create: {
     *     // ... data to create a TtsShop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TtsShop we want to update
     *   }
     * })
     */
    upsert<T extends TtsShopUpsertArgs>(args: SelectSubset<T, TtsShopUpsertArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TtsShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopCountArgs} args - Arguments to filter TtsShops to count.
     * @example
     * // Count the number of TtsShops
     * const count = await prisma.ttsShop.count({
     *   where: {
     *     // ... the filter for the TtsShops we want to count
     *   }
     * })
    **/
    count<T extends TtsShopCountArgs>(
      args?: Subset<T, TtsShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TtsShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TtsShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TtsShopAggregateArgs>(args: Subset<T, TtsShopAggregateArgs>): Prisma.PrismaPromise<GetTtsShopAggregateType<T>>

    /**
     * Group by TtsShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TtsShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TtsShopGroupByArgs['orderBy'] }
        : { orderBy?: TtsShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TtsShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTtsShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TtsShop model
   */
  readonly fields: TtsShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TtsShop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TtsShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends TtsShop$tokensArgs<ExtArgs> = {}>(args?: Subset<T, TtsShop$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TtsShop model
   */
  interface TtsShopFieldRefs {
    readonly id: FieldRef<"TtsShop", 'BigInt'>
    readonly slug: FieldRef<"TtsShop", 'String'>
    readonly encrypt_key: FieldRef<"TtsShop", 'String'>
    readonly code: FieldRef<"TtsShop", 'String'>
    readonly name: FieldRef<"TtsShop", 'String'>
    readonly region: FieldRef<"TtsShop", 'String'>
    readonly seller_type: FieldRef<"TtsShop", 'String'>
    readonly cipher: FieldRef<"TtsShop", 'String'>
    readonly is_active: FieldRef<"TtsShop", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TtsShop findUnique
   */
  export type TtsShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * Filter, which TtsShop to fetch.
     */
    where: TtsShopWhereUniqueInput
  }

  /**
   * TtsShop findUniqueOrThrow
   */
  export type TtsShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * Filter, which TtsShop to fetch.
     */
    where: TtsShopWhereUniqueInput
  }

  /**
   * TtsShop findFirst
   */
  export type TtsShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * Filter, which TtsShop to fetch.
     */
    where?: TtsShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShops to fetch.
     */
    orderBy?: TtsShopOrderByWithRelationInput | TtsShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TtsShops.
     */
    cursor?: TtsShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsShops.
     */
    distinct?: TtsShopScalarFieldEnum | TtsShopScalarFieldEnum[]
  }

  /**
   * TtsShop findFirstOrThrow
   */
  export type TtsShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * Filter, which TtsShop to fetch.
     */
    where?: TtsShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShops to fetch.
     */
    orderBy?: TtsShopOrderByWithRelationInput | TtsShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TtsShops.
     */
    cursor?: TtsShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsShops.
     */
    distinct?: TtsShopScalarFieldEnum | TtsShopScalarFieldEnum[]
  }

  /**
   * TtsShop findMany
   */
  export type TtsShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * Filter, which TtsShops to fetch.
     */
    where?: TtsShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShops to fetch.
     */
    orderBy?: TtsShopOrderByWithRelationInput | TtsShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TtsShops.
     */
    cursor?: TtsShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsShops.
     */
    distinct?: TtsShopScalarFieldEnum | TtsShopScalarFieldEnum[]
  }

  /**
   * TtsShop create
   */
  export type TtsShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * The data needed to create a TtsShop.
     */
    data: XOR<TtsShopCreateInput, TtsShopUncheckedCreateInput>
  }

  /**
   * TtsShop createMany
   */
  export type TtsShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TtsShops.
     */
    data: TtsShopCreateManyInput | TtsShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TtsShop update
   */
  export type TtsShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * The data needed to update a TtsShop.
     */
    data: XOR<TtsShopUpdateInput, TtsShopUncheckedUpdateInput>
    /**
     * Choose, which TtsShop to update.
     */
    where: TtsShopWhereUniqueInput
  }

  /**
   * TtsShop updateMany
   */
  export type TtsShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TtsShops.
     */
    data: XOR<TtsShopUpdateManyMutationInput, TtsShopUncheckedUpdateManyInput>
    /**
     * Filter which TtsShops to update
     */
    where?: TtsShopWhereInput
    /**
     * Limit how many TtsShops to update.
     */
    limit?: number
  }

  /**
   * TtsShop upsert
   */
  export type TtsShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * The filter to search for the TtsShop to update in case it exists.
     */
    where: TtsShopWhereUniqueInput
    /**
     * In case the TtsShop found by the `where` argument doesn't exist, create a new TtsShop with this data.
     */
    create: XOR<TtsShopCreateInput, TtsShopUncheckedCreateInput>
    /**
     * In case the TtsShop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TtsShopUpdateInput, TtsShopUncheckedUpdateInput>
  }

  /**
   * TtsShop delete
   */
  export type TtsShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
    /**
     * Filter which TtsShop to delete.
     */
    where: TtsShopWhereUniqueInput
  }

  /**
   * TtsShop deleteMany
   */
  export type TtsShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TtsShops to delete
     */
    where?: TtsShopWhereInput
    /**
     * Limit how many TtsShops to delete.
     */
    limit?: number
  }

  /**
   * TtsShop.tokens
   */
  export type TtsShop$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    where?: TtsShopAppTokenWhereInput
    orderBy?: TtsShopAppTokenOrderByWithRelationInput | TtsShopAppTokenOrderByWithRelationInput[]
    cursor?: TtsShopAppTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TtsShopAppTokenScalarFieldEnum | TtsShopAppTokenScalarFieldEnum[]
  }

  /**
   * TtsShop without action
   */
  export type TtsShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShop
     */
    select?: TtsShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShop
     */
    omit?: TtsShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopInclude<ExtArgs> | null
  }


  /**
   * Model TtsShopAppToken
   */

  export type AggregateTtsShopAppToken = {
    _count: TtsShopAppTokenCountAggregateOutputType | null
    _avg: TtsShopAppTokenAvgAggregateOutputType | null
    _sum: TtsShopAppTokenSumAggregateOutputType | null
    _min: TtsShopAppTokenMinAggregateOutputType | null
    _max: TtsShopAppTokenMaxAggregateOutputType | null
  }

  export type TtsShopAppTokenAvgAggregateOutputType = {
    id: number | null
    shop_id: number | null
    access_token_expire_in: number | null
    refresh_token_expire_in: number | null
    user_type: number | null
  }

  export type TtsShopAppTokenSumAggregateOutputType = {
    id: number | null
    shop_id: bigint | null
    access_token_expire_in: bigint | null
    refresh_token_expire_in: bigint | null
    user_type: number | null
  }

  export type TtsShopAppTokenMinAggregateOutputType = {
    id: number | null
    shop_id: bigint | null
    app_key: string | null
    access_token: string | null
    access_token_expire_in: bigint | null
    refresh_token: string | null
    refresh_token_expire_in: bigint | null
    open_id: string | null
    seller_name: string | null
    seller_base_region: string | null
    user_type: number | null
    status: string | null
    last_refreshed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TtsShopAppTokenMaxAggregateOutputType = {
    id: number | null
    shop_id: bigint | null
    app_key: string | null
    access_token: string | null
    access_token_expire_in: bigint | null
    refresh_token: string | null
    refresh_token_expire_in: bigint | null
    open_id: string | null
    seller_name: string | null
    seller_base_region: string | null
    user_type: number | null
    status: string | null
    last_refreshed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TtsShopAppTokenCountAggregateOutputType = {
    id: number
    shop_id: number
    app_key: number
    access_token: number
    access_token_expire_in: number
    refresh_token: number
    refresh_token_expire_in: number
    open_id: number
    seller_name: number
    seller_base_region: number
    user_type: number
    granted_scopes: number
    status: number
    last_refreshed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TtsShopAppTokenAvgAggregateInputType = {
    id?: true
    shop_id?: true
    access_token_expire_in?: true
    refresh_token_expire_in?: true
    user_type?: true
  }

  export type TtsShopAppTokenSumAggregateInputType = {
    id?: true
    shop_id?: true
    access_token_expire_in?: true
    refresh_token_expire_in?: true
    user_type?: true
  }

  export type TtsShopAppTokenMinAggregateInputType = {
    id?: true
    shop_id?: true
    app_key?: true
    access_token?: true
    access_token_expire_in?: true
    refresh_token?: true
    refresh_token_expire_in?: true
    open_id?: true
    seller_name?: true
    seller_base_region?: true
    user_type?: true
    status?: true
    last_refreshed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type TtsShopAppTokenMaxAggregateInputType = {
    id?: true
    shop_id?: true
    app_key?: true
    access_token?: true
    access_token_expire_in?: true
    refresh_token?: true
    refresh_token_expire_in?: true
    open_id?: true
    seller_name?: true
    seller_base_region?: true
    user_type?: true
    status?: true
    last_refreshed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type TtsShopAppTokenCountAggregateInputType = {
    id?: true
    shop_id?: true
    app_key?: true
    access_token?: true
    access_token_expire_in?: true
    refresh_token?: true
    refresh_token_expire_in?: true
    open_id?: true
    seller_name?: true
    seller_base_region?: true
    user_type?: true
    granted_scopes?: true
    status?: true
    last_refreshed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TtsShopAppTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TtsShopAppToken to aggregate.
     */
    where?: TtsShopAppTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShopAppTokens to fetch.
     */
    orderBy?: TtsShopAppTokenOrderByWithRelationInput | TtsShopAppTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TtsShopAppTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShopAppTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShopAppTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TtsShopAppTokens
    **/
    _count?: true | TtsShopAppTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TtsShopAppTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TtsShopAppTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TtsShopAppTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TtsShopAppTokenMaxAggregateInputType
  }

  export type GetTtsShopAppTokenAggregateType<T extends TtsShopAppTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateTtsShopAppToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTtsShopAppToken[P]>
      : GetScalarType<T[P], AggregateTtsShopAppToken[P]>
  }




  export type TtsShopAppTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TtsShopAppTokenWhereInput
    orderBy?: TtsShopAppTokenOrderByWithAggregationInput | TtsShopAppTokenOrderByWithAggregationInput[]
    by: TtsShopAppTokenScalarFieldEnum[] | TtsShopAppTokenScalarFieldEnum
    having?: TtsShopAppTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TtsShopAppTokenCountAggregateInputType | true
    _avg?: TtsShopAppTokenAvgAggregateInputType
    _sum?: TtsShopAppTokenSumAggregateInputType
    _min?: TtsShopAppTokenMinAggregateInputType
    _max?: TtsShopAppTokenMaxAggregateInputType
  }

  export type TtsShopAppTokenGroupByOutputType = {
    id: number
    shop_id: bigint
    app_key: string
    access_token: string
    access_token_expire_in: bigint
    refresh_token: string
    refresh_token_expire_in: bigint
    open_id: string
    seller_name: string
    seller_base_region: string
    user_type: number
    granted_scopes: JsonValue
    status: string
    last_refreshed_at: Date | null
    created_at: Date
    updated_at: Date
    _count: TtsShopAppTokenCountAggregateOutputType | null
    _avg: TtsShopAppTokenAvgAggregateOutputType | null
    _sum: TtsShopAppTokenSumAggregateOutputType | null
    _min: TtsShopAppTokenMinAggregateOutputType | null
    _max: TtsShopAppTokenMaxAggregateOutputType | null
  }

  type GetTtsShopAppTokenGroupByPayload<T extends TtsShopAppTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TtsShopAppTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TtsShopAppTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TtsShopAppTokenGroupByOutputType[P]>
            : GetScalarType<T[P], TtsShopAppTokenGroupByOutputType[P]>
        }
      >
    >


  export type TtsShopAppTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop_id?: boolean
    app_key?: boolean
    access_token?: boolean
    access_token_expire_in?: boolean
    refresh_token?: boolean
    refresh_token_expire_in?: boolean
    open_id?: boolean
    seller_name?: boolean
    seller_base_region?: boolean
    user_type?: boolean
    granted_scopes?: boolean
    status?: boolean
    last_refreshed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    shop?: boolean | TtsShopDefaultArgs<ExtArgs>
    app?: boolean | TtsAppDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ttsShopAppToken"]>



  export type TtsShopAppTokenSelectScalar = {
    id?: boolean
    shop_id?: boolean
    app_key?: boolean
    access_token?: boolean
    access_token_expire_in?: boolean
    refresh_token?: boolean
    refresh_token_expire_in?: boolean
    open_id?: boolean
    seller_name?: boolean
    seller_base_region?: boolean
    user_type?: boolean
    granted_scopes?: boolean
    status?: boolean
    last_refreshed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TtsShopAppTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shop_id" | "app_key" | "access_token" | "access_token_expire_in" | "refresh_token" | "refresh_token_expire_in" | "open_id" | "seller_name" | "seller_base_region" | "user_type" | "granted_scopes" | "status" | "last_refreshed_at" | "created_at" | "updated_at", ExtArgs["result"]["ttsShopAppToken"]>
  export type TtsShopAppTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | TtsShopDefaultArgs<ExtArgs>
    app?: boolean | TtsAppDefaultArgs<ExtArgs>
  }

  export type $TtsShopAppTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TtsShopAppToken"
    objects: {
      shop: Prisma.$TtsShopPayload<ExtArgs>
      app: Prisma.$TtsAppPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shop_id: bigint
      app_key: string
      access_token: string
      access_token_expire_in: bigint
      refresh_token: string
      refresh_token_expire_in: bigint
      open_id: string
      seller_name: string
      seller_base_region: string
      user_type: number
      granted_scopes: Prisma.JsonValue
      status: string
      last_refreshed_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ttsShopAppToken"]>
    composites: {}
  }

  type TtsShopAppTokenGetPayload<S extends boolean | null | undefined | TtsShopAppTokenDefaultArgs> = $Result.GetResult<Prisma.$TtsShopAppTokenPayload, S>

  type TtsShopAppTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TtsShopAppTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TtsShopAppTokenCountAggregateInputType | true
    }

  export interface TtsShopAppTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TtsShopAppToken'], meta: { name: 'TtsShopAppToken' } }
    /**
     * Find zero or one TtsShopAppToken that matches the filter.
     * @param {TtsShopAppTokenFindUniqueArgs} args - Arguments to find a TtsShopAppToken
     * @example
     * // Get one TtsShopAppToken
     * const ttsShopAppToken = await prisma.ttsShopAppToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TtsShopAppTokenFindUniqueArgs>(args: SelectSubset<T, TtsShopAppTokenFindUniqueArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TtsShopAppToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TtsShopAppTokenFindUniqueOrThrowArgs} args - Arguments to find a TtsShopAppToken
     * @example
     * // Get one TtsShopAppToken
     * const ttsShopAppToken = await prisma.ttsShopAppToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TtsShopAppTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TtsShopAppTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TtsShopAppToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAppTokenFindFirstArgs} args - Arguments to find a TtsShopAppToken
     * @example
     * // Get one TtsShopAppToken
     * const ttsShopAppToken = await prisma.ttsShopAppToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TtsShopAppTokenFindFirstArgs>(args?: SelectSubset<T, TtsShopAppTokenFindFirstArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TtsShopAppToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAppTokenFindFirstOrThrowArgs} args - Arguments to find a TtsShopAppToken
     * @example
     * // Get one TtsShopAppToken
     * const ttsShopAppToken = await prisma.ttsShopAppToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TtsShopAppTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TtsShopAppTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TtsShopAppTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAppTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TtsShopAppTokens
     * const ttsShopAppTokens = await prisma.ttsShopAppToken.findMany()
     * 
     * // Get first 10 TtsShopAppTokens
     * const ttsShopAppTokens = await prisma.ttsShopAppToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ttsShopAppTokenWithIdOnly = await prisma.ttsShopAppToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TtsShopAppTokenFindManyArgs>(args?: SelectSubset<T, TtsShopAppTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TtsShopAppToken.
     * @param {TtsShopAppTokenCreateArgs} args - Arguments to create a TtsShopAppToken.
     * @example
     * // Create one TtsShopAppToken
     * const TtsShopAppToken = await prisma.ttsShopAppToken.create({
     *   data: {
     *     // ... data to create a TtsShopAppToken
     *   }
     * })
     * 
     */
    create<T extends TtsShopAppTokenCreateArgs>(args: SelectSubset<T, TtsShopAppTokenCreateArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TtsShopAppTokens.
     * @param {TtsShopAppTokenCreateManyArgs} args - Arguments to create many TtsShopAppTokens.
     * @example
     * // Create many TtsShopAppTokens
     * const ttsShopAppToken = await prisma.ttsShopAppToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TtsShopAppTokenCreateManyArgs>(args?: SelectSubset<T, TtsShopAppTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TtsShopAppToken.
     * @param {TtsShopAppTokenDeleteArgs} args - Arguments to delete one TtsShopAppToken.
     * @example
     * // Delete one TtsShopAppToken
     * const TtsShopAppToken = await prisma.ttsShopAppToken.delete({
     *   where: {
     *     // ... filter to delete one TtsShopAppToken
     *   }
     * })
     * 
     */
    delete<T extends TtsShopAppTokenDeleteArgs>(args: SelectSubset<T, TtsShopAppTokenDeleteArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TtsShopAppToken.
     * @param {TtsShopAppTokenUpdateArgs} args - Arguments to update one TtsShopAppToken.
     * @example
     * // Update one TtsShopAppToken
     * const ttsShopAppToken = await prisma.ttsShopAppToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TtsShopAppTokenUpdateArgs>(args: SelectSubset<T, TtsShopAppTokenUpdateArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TtsShopAppTokens.
     * @param {TtsShopAppTokenDeleteManyArgs} args - Arguments to filter TtsShopAppTokens to delete.
     * @example
     * // Delete a few TtsShopAppTokens
     * const { count } = await prisma.ttsShopAppToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TtsShopAppTokenDeleteManyArgs>(args?: SelectSubset<T, TtsShopAppTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TtsShopAppTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAppTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TtsShopAppTokens
     * const ttsShopAppToken = await prisma.ttsShopAppToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TtsShopAppTokenUpdateManyArgs>(args: SelectSubset<T, TtsShopAppTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TtsShopAppToken.
     * @param {TtsShopAppTokenUpsertArgs} args - Arguments to update or create a TtsShopAppToken.
     * @example
     * // Update or create a TtsShopAppToken
     * const ttsShopAppToken = await prisma.ttsShopAppToken.upsert({
     *   create: {
     *     // ... data to create a TtsShopAppToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TtsShopAppToken we want to update
     *   }
     * })
     */
    upsert<T extends TtsShopAppTokenUpsertArgs>(args: SelectSubset<T, TtsShopAppTokenUpsertArgs<ExtArgs>>): Prisma__TtsShopAppTokenClient<$Result.GetResult<Prisma.$TtsShopAppTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TtsShopAppTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAppTokenCountArgs} args - Arguments to filter TtsShopAppTokens to count.
     * @example
     * // Count the number of TtsShopAppTokens
     * const count = await prisma.ttsShopAppToken.count({
     *   where: {
     *     // ... the filter for the TtsShopAppTokens we want to count
     *   }
     * })
    **/
    count<T extends TtsShopAppTokenCountArgs>(
      args?: Subset<T, TtsShopAppTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TtsShopAppTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TtsShopAppToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAppTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TtsShopAppTokenAggregateArgs>(args: Subset<T, TtsShopAppTokenAggregateArgs>): Prisma.PrismaPromise<GetTtsShopAppTokenAggregateType<T>>

    /**
     * Group by TtsShopAppToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TtsShopAppTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TtsShopAppTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TtsShopAppTokenGroupByArgs['orderBy'] }
        : { orderBy?: TtsShopAppTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TtsShopAppTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTtsShopAppTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TtsShopAppToken model
   */
  readonly fields: TtsShopAppTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TtsShopAppToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TtsShopAppTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends TtsShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TtsShopDefaultArgs<ExtArgs>>): Prisma__TtsShopClient<$Result.GetResult<Prisma.$TtsShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    app<T extends TtsAppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TtsAppDefaultArgs<ExtArgs>>): Prisma__TtsAppClient<$Result.GetResult<Prisma.$TtsAppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TtsShopAppToken model
   */
  interface TtsShopAppTokenFieldRefs {
    readonly id: FieldRef<"TtsShopAppToken", 'Int'>
    readonly shop_id: FieldRef<"TtsShopAppToken", 'BigInt'>
    readonly app_key: FieldRef<"TtsShopAppToken", 'String'>
    readonly access_token: FieldRef<"TtsShopAppToken", 'String'>
    readonly access_token_expire_in: FieldRef<"TtsShopAppToken", 'BigInt'>
    readonly refresh_token: FieldRef<"TtsShopAppToken", 'String'>
    readonly refresh_token_expire_in: FieldRef<"TtsShopAppToken", 'BigInt'>
    readonly open_id: FieldRef<"TtsShopAppToken", 'String'>
    readonly seller_name: FieldRef<"TtsShopAppToken", 'String'>
    readonly seller_base_region: FieldRef<"TtsShopAppToken", 'String'>
    readonly user_type: FieldRef<"TtsShopAppToken", 'Int'>
    readonly granted_scopes: FieldRef<"TtsShopAppToken", 'Json'>
    readonly status: FieldRef<"TtsShopAppToken", 'String'>
    readonly last_refreshed_at: FieldRef<"TtsShopAppToken", 'DateTime'>
    readonly created_at: FieldRef<"TtsShopAppToken", 'DateTime'>
    readonly updated_at: FieldRef<"TtsShopAppToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TtsShopAppToken findUnique
   */
  export type TtsShopAppTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * Filter, which TtsShopAppToken to fetch.
     */
    where: TtsShopAppTokenWhereUniqueInput
  }

  /**
   * TtsShopAppToken findUniqueOrThrow
   */
  export type TtsShopAppTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * Filter, which TtsShopAppToken to fetch.
     */
    where: TtsShopAppTokenWhereUniqueInput
  }

  /**
   * TtsShopAppToken findFirst
   */
  export type TtsShopAppTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * Filter, which TtsShopAppToken to fetch.
     */
    where?: TtsShopAppTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShopAppTokens to fetch.
     */
    orderBy?: TtsShopAppTokenOrderByWithRelationInput | TtsShopAppTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TtsShopAppTokens.
     */
    cursor?: TtsShopAppTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShopAppTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShopAppTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsShopAppTokens.
     */
    distinct?: TtsShopAppTokenScalarFieldEnum | TtsShopAppTokenScalarFieldEnum[]
  }

  /**
   * TtsShopAppToken findFirstOrThrow
   */
  export type TtsShopAppTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * Filter, which TtsShopAppToken to fetch.
     */
    where?: TtsShopAppTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShopAppTokens to fetch.
     */
    orderBy?: TtsShopAppTokenOrderByWithRelationInput | TtsShopAppTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TtsShopAppTokens.
     */
    cursor?: TtsShopAppTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShopAppTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShopAppTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsShopAppTokens.
     */
    distinct?: TtsShopAppTokenScalarFieldEnum | TtsShopAppTokenScalarFieldEnum[]
  }

  /**
   * TtsShopAppToken findMany
   */
  export type TtsShopAppTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * Filter, which TtsShopAppTokens to fetch.
     */
    where?: TtsShopAppTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TtsShopAppTokens to fetch.
     */
    orderBy?: TtsShopAppTokenOrderByWithRelationInput | TtsShopAppTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TtsShopAppTokens.
     */
    cursor?: TtsShopAppTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TtsShopAppTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TtsShopAppTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TtsShopAppTokens.
     */
    distinct?: TtsShopAppTokenScalarFieldEnum | TtsShopAppTokenScalarFieldEnum[]
  }

  /**
   * TtsShopAppToken create
   */
  export type TtsShopAppTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a TtsShopAppToken.
     */
    data: XOR<TtsShopAppTokenCreateInput, TtsShopAppTokenUncheckedCreateInput>
  }

  /**
   * TtsShopAppToken createMany
   */
  export type TtsShopAppTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TtsShopAppTokens.
     */
    data: TtsShopAppTokenCreateManyInput | TtsShopAppTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TtsShopAppToken update
   */
  export type TtsShopAppTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a TtsShopAppToken.
     */
    data: XOR<TtsShopAppTokenUpdateInput, TtsShopAppTokenUncheckedUpdateInput>
    /**
     * Choose, which TtsShopAppToken to update.
     */
    where: TtsShopAppTokenWhereUniqueInput
  }

  /**
   * TtsShopAppToken updateMany
   */
  export type TtsShopAppTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TtsShopAppTokens.
     */
    data: XOR<TtsShopAppTokenUpdateManyMutationInput, TtsShopAppTokenUncheckedUpdateManyInput>
    /**
     * Filter which TtsShopAppTokens to update
     */
    where?: TtsShopAppTokenWhereInput
    /**
     * Limit how many TtsShopAppTokens to update.
     */
    limit?: number
  }

  /**
   * TtsShopAppToken upsert
   */
  export type TtsShopAppTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the TtsShopAppToken to update in case it exists.
     */
    where: TtsShopAppTokenWhereUniqueInput
    /**
     * In case the TtsShopAppToken found by the `where` argument doesn't exist, create a new TtsShopAppToken with this data.
     */
    create: XOR<TtsShopAppTokenCreateInput, TtsShopAppTokenUncheckedCreateInput>
    /**
     * In case the TtsShopAppToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TtsShopAppTokenUpdateInput, TtsShopAppTokenUncheckedUpdateInput>
  }

  /**
   * TtsShopAppToken delete
   */
  export type TtsShopAppTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
    /**
     * Filter which TtsShopAppToken to delete.
     */
    where: TtsShopAppTokenWhereUniqueInput
  }

  /**
   * TtsShopAppToken deleteMany
   */
  export type TtsShopAppTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TtsShopAppTokens to delete
     */
    where?: TtsShopAppTokenWhereInput
    /**
     * Limit how many TtsShopAppTokens to delete.
     */
    limit?: number
  }

  /**
   * TtsShopAppToken without action
   */
  export type TtsShopAppTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TtsShopAppToken
     */
    select?: TtsShopAppTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TtsShopAppToken
     */
    omit?: TtsShopAppTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TtsShopAppTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApiCredentialScalarFieldEnum: {
    id: 'id',
    app_key: 'app_key',
    access_token: 'access_token',
    access_token_expire_in: 'access_token_expire_in',
    refresh_token: 'refresh_token',
    refresh_token_expire_in: 'refresh_token_expire_in',
    open_id: 'open_id',
    seller_name: 'seller_name',
    seller_base_region: 'seller_base_region',
    user_type: 'user_type',
    granted_scopes: 'granted_scopes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiCredentialScalarFieldEnum = (typeof ApiCredentialScalarFieldEnum)[keyof typeof ApiCredentialScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    region: 'region',
    seller_type: 'seller_type',
    cipher: 'cipher'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const AppScalarFieldEnum: {
    id: 'id',
    app_key: 'app_key',
    app_secret: 'app_secret',
    redirect_domain: 'redirect_domain',
    success_path: 'success_path',
    failure_path: 'failure_path',
    description: 'description',
    auth_url: 'auth_url'
  };

  export type AppScalarFieldEnum = (typeof AppScalarFieldEnum)[keyof typeof AppScalarFieldEnum]


  export const TtsAppScalarFieldEnum: {
    id: 'id',
    app_key: 'app_key',
    app_secret: 'app_secret',
    redirect_domain: 'redirect_domain',
    success_path: 'success_path',
    failure_path: 'failure_path',
    description: 'description',
    auth_url: 'auth_url'
  };

  export type TtsAppScalarFieldEnum = (typeof TtsAppScalarFieldEnum)[keyof typeof TtsAppScalarFieldEnum]


  export const TtsShopScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    encrypt_key: 'encrypt_key',
    code: 'code',
    name: 'name',
    region: 'region',
    seller_type: 'seller_type',
    cipher: 'cipher',
    is_active: 'is_active'
  };

  export type TtsShopScalarFieldEnum = (typeof TtsShopScalarFieldEnum)[keyof typeof TtsShopScalarFieldEnum]


  export const TtsShopAppTokenScalarFieldEnum: {
    id: 'id',
    shop_id: 'shop_id',
    app_key: 'app_key',
    access_token: 'access_token',
    access_token_expire_in: 'access_token_expire_in',
    refresh_token: 'refresh_token',
    refresh_token_expire_in: 'refresh_token_expire_in',
    open_id: 'open_id',
    seller_name: 'seller_name',
    seller_base_region: 'seller_base_region',
    user_type: 'user_type',
    granted_scopes: 'granted_scopes',
    status: 'status',
    last_refreshed_at: 'last_refreshed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TtsShopAppTokenScalarFieldEnum = (typeof TtsShopAppTokenScalarFieldEnum)[keyof typeof TtsShopAppTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ApiCredentialOrderByRelevanceFieldEnum: {
    app_key: 'app_key',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    open_id: 'open_id',
    seller_name: 'seller_name',
    seller_base_region: 'seller_base_region'
  };

  export type ApiCredentialOrderByRelevanceFieldEnum = (typeof ApiCredentialOrderByRelevanceFieldEnum)[keyof typeof ApiCredentialOrderByRelevanceFieldEnum]


  export const ShopOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name',
    region: 'region',
    seller_type: 'seller_type',
    cipher: 'cipher'
  };

  export type ShopOrderByRelevanceFieldEnum = (typeof ShopOrderByRelevanceFieldEnum)[keyof typeof ShopOrderByRelevanceFieldEnum]


  export const AppOrderByRelevanceFieldEnum: {
    app_key: 'app_key',
    app_secret: 'app_secret',
    redirect_domain: 'redirect_domain',
    success_path: 'success_path',
    failure_path: 'failure_path',
    description: 'description',
    auth_url: 'auth_url'
  };

  export type AppOrderByRelevanceFieldEnum = (typeof AppOrderByRelevanceFieldEnum)[keyof typeof AppOrderByRelevanceFieldEnum]


  export const TtsAppOrderByRelevanceFieldEnum: {
    app_key: 'app_key',
    app_secret: 'app_secret',
    redirect_domain: 'redirect_domain',
    success_path: 'success_path',
    failure_path: 'failure_path',
    description: 'description',
    auth_url: 'auth_url'
  };

  export type TtsAppOrderByRelevanceFieldEnum = (typeof TtsAppOrderByRelevanceFieldEnum)[keyof typeof TtsAppOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TtsShopOrderByRelevanceFieldEnum: {
    slug: 'slug',
    encrypt_key: 'encrypt_key',
    code: 'code',
    name: 'name',
    region: 'region',
    seller_type: 'seller_type',
    cipher: 'cipher'
  };

  export type TtsShopOrderByRelevanceFieldEnum = (typeof TtsShopOrderByRelevanceFieldEnum)[keyof typeof TtsShopOrderByRelevanceFieldEnum]


  export const TtsShopAppTokenOrderByRelevanceFieldEnum: {
    app_key: 'app_key',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    open_id: 'open_id',
    seller_name: 'seller_name',
    seller_base_region: 'seller_base_region',
    status: 'status'
  };

  export type TtsShopAppTokenOrderByRelevanceFieldEnum = (typeof TtsShopAppTokenOrderByRelevanceFieldEnum)[keyof typeof TtsShopAppTokenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ApiCredentialWhereInput = {
    AND?: ApiCredentialWhereInput | ApiCredentialWhereInput[]
    OR?: ApiCredentialWhereInput[]
    NOT?: ApiCredentialWhereInput | ApiCredentialWhereInput[]
    id?: IntFilter<"ApiCredential"> | number
    app_key?: StringFilter<"ApiCredential"> | string
    access_token?: StringFilter<"ApiCredential"> | string
    access_token_expire_in?: BigIntFilter<"ApiCredential"> | bigint | number
    refresh_token?: StringFilter<"ApiCredential"> | string
    refresh_token_expire_in?: BigIntFilter<"ApiCredential"> | bigint | number
    open_id?: StringFilter<"ApiCredential"> | string
    seller_name?: StringFilter<"ApiCredential"> | string
    seller_base_region?: StringFilter<"ApiCredential"> | string
    user_type?: IntFilter<"ApiCredential"> | number
    granted_scopes?: JsonFilter<"ApiCredential">
    createdAt?: DateTimeFilter<"ApiCredential"> | Date | string
    updatedAt?: DateTimeFilter<"ApiCredential"> | Date | string
  }

  export type ApiCredentialOrderByWithRelationInput = {
    id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    granted_scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ApiCredentialOrderByRelevanceInput
  }

  export type ApiCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApiCredentialWhereInput | ApiCredentialWhereInput[]
    OR?: ApiCredentialWhereInput[]
    NOT?: ApiCredentialWhereInput | ApiCredentialWhereInput[]
    app_key?: StringFilter<"ApiCredential"> | string
    access_token?: StringFilter<"ApiCredential"> | string
    access_token_expire_in?: BigIntFilter<"ApiCredential"> | bigint | number
    refresh_token?: StringFilter<"ApiCredential"> | string
    refresh_token_expire_in?: BigIntFilter<"ApiCredential"> | bigint | number
    open_id?: StringFilter<"ApiCredential"> | string
    seller_name?: StringFilter<"ApiCredential"> | string
    seller_base_region?: StringFilter<"ApiCredential"> | string
    user_type?: IntFilter<"ApiCredential"> | number
    granted_scopes?: JsonFilter<"ApiCredential">
    createdAt?: DateTimeFilter<"ApiCredential"> | Date | string
    updatedAt?: DateTimeFilter<"ApiCredential"> | Date | string
  }, "id">

  export type ApiCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    granted_scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiCredentialCountOrderByAggregateInput
    _avg?: ApiCredentialAvgOrderByAggregateInput
    _max?: ApiCredentialMaxOrderByAggregateInput
    _min?: ApiCredentialMinOrderByAggregateInput
    _sum?: ApiCredentialSumOrderByAggregateInput
  }

  export type ApiCredentialScalarWhereWithAggregatesInput = {
    AND?: ApiCredentialScalarWhereWithAggregatesInput | ApiCredentialScalarWhereWithAggregatesInput[]
    OR?: ApiCredentialScalarWhereWithAggregatesInput[]
    NOT?: ApiCredentialScalarWhereWithAggregatesInput | ApiCredentialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApiCredential"> | number
    app_key?: StringWithAggregatesFilter<"ApiCredential"> | string
    access_token?: StringWithAggregatesFilter<"ApiCredential"> | string
    access_token_expire_in?: BigIntWithAggregatesFilter<"ApiCredential"> | bigint | number
    refresh_token?: StringWithAggregatesFilter<"ApiCredential"> | string
    refresh_token_expire_in?: BigIntWithAggregatesFilter<"ApiCredential"> | bigint | number
    open_id?: StringWithAggregatesFilter<"ApiCredential"> | string
    seller_name?: StringWithAggregatesFilter<"ApiCredential"> | string
    seller_base_region?: StringWithAggregatesFilter<"ApiCredential"> | string
    user_type?: IntWithAggregatesFilter<"ApiCredential"> | number
    granted_scopes?: JsonWithAggregatesFilter<"ApiCredential">
    createdAt?: DateTimeWithAggregatesFilter<"ApiCredential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiCredential"> | Date | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: BigIntFilter<"Shop"> | bigint | number
    code?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    region?: StringFilter<"Shop"> | string
    seller_type?: StringFilter<"Shop"> | string
    cipher?: StringFilter<"Shop"> | string
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
    _relevance?: ShopOrderByRelevanceInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    code?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    region?: StringFilter<"Shop"> | string
    seller_type?: StringFilter<"Shop"> | string
    cipher?: StringFilter<"Shop"> | string
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Shop"> | bigint | number
    code?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    region?: StringWithAggregatesFilter<"Shop"> | string
    seller_type?: StringWithAggregatesFilter<"Shop"> | string
    cipher?: StringWithAggregatesFilter<"Shop"> | string
  }

  export type AppWhereInput = {
    AND?: AppWhereInput | AppWhereInput[]
    OR?: AppWhereInput[]
    NOT?: AppWhereInput | AppWhereInput[]
    id?: IntFilter<"App"> | number
    app_key?: StringFilter<"App"> | string
    app_secret?: StringFilter<"App"> | string
    redirect_domain?: StringFilter<"App"> | string
    success_path?: StringFilter<"App"> | string
    failure_path?: StringFilter<"App"> | string
    description?: StringFilter<"App"> | string
    auth_url?: StringFilter<"App"> | string
  }

  export type AppOrderByWithRelationInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
    _relevance?: AppOrderByRelevanceInput
  }

  export type AppWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    app_key?: string
    AND?: AppWhereInput | AppWhereInput[]
    OR?: AppWhereInput[]
    NOT?: AppWhereInput | AppWhereInput[]
    app_secret?: StringFilter<"App"> | string
    redirect_domain?: StringFilter<"App"> | string
    success_path?: StringFilter<"App"> | string
    failure_path?: StringFilter<"App"> | string
    description?: StringFilter<"App"> | string
    auth_url?: StringFilter<"App"> | string
  }, "id" | "app_key">

  export type AppOrderByWithAggregationInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
    _count?: AppCountOrderByAggregateInput
    _avg?: AppAvgOrderByAggregateInput
    _max?: AppMaxOrderByAggregateInput
    _min?: AppMinOrderByAggregateInput
    _sum?: AppSumOrderByAggregateInput
  }

  export type AppScalarWhereWithAggregatesInput = {
    AND?: AppScalarWhereWithAggregatesInput | AppScalarWhereWithAggregatesInput[]
    OR?: AppScalarWhereWithAggregatesInput[]
    NOT?: AppScalarWhereWithAggregatesInput | AppScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"App"> | number
    app_key?: StringWithAggregatesFilter<"App"> | string
    app_secret?: StringWithAggregatesFilter<"App"> | string
    redirect_domain?: StringWithAggregatesFilter<"App"> | string
    success_path?: StringWithAggregatesFilter<"App"> | string
    failure_path?: StringWithAggregatesFilter<"App"> | string
    description?: StringWithAggregatesFilter<"App"> | string
    auth_url?: StringWithAggregatesFilter<"App"> | string
  }

  export type TtsAppWhereInput = {
    AND?: TtsAppWhereInput | TtsAppWhereInput[]
    OR?: TtsAppWhereInput[]
    NOT?: TtsAppWhereInput | TtsAppWhereInput[]
    id?: IntFilter<"TtsApp"> | number
    app_key?: StringFilter<"TtsApp"> | string
    app_secret?: StringFilter<"TtsApp"> | string
    redirect_domain?: StringFilter<"TtsApp"> | string
    success_path?: StringFilter<"TtsApp"> | string
    failure_path?: StringFilter<"TtsApp"> | string
    description?: StringFilter<"TtsApp"> | string
    auth_url?: StringFilter<"TtsApp"> | string
    tokens?: TtsShopAppTokenListRelationFilter
  }

  export type TtsAppOrderByWithRelationInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
    tokens?: TtsShopAppTokenOrderByRelationAggregateInput
    _relevance?: TtsAppOrderByRelevanceInput
  }

  export type TtsAppWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    app_key?: string
    AND?: TtsAppWhereInput | TtsAppWhereInput[]
    OR?: TtsAppWhereInput[]
    NOT?: TtsAppWhereInput | TtsAppWhereInput[]
    app_secret?: StringFilter<"TtsApp"> | string
    redirect_domain?: StringFilter<"TtsApp"> | string
    success_path?: StringFilter<"TtsApp"> | string
    failure_path?: StringFilter<"TtsApp"> | string
    description?: StringFilter<"TtsApp"> | string
    auth_url?: StringFilter<"TtsApp"> | string
    tokens?: TtsShopAppTokenListRelationFilter
  }, "id" | "app_key">

  export type TtsAppOrderByWithAggregationInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
    _count?: TtsAppCountOrderByAggregateInput
    _avg?: TtsAppAvgOrderByAggregateInput
    _max?: TtsAppMaxOrderByAggregateInput
    _min?: TtsAppMinOrderByAggregateInput
    _sum?: TtsAppSumOrderByAggregateInput
  }

  export type TtsAppScalarWhereWithAggregatesInput = {
    AND?: TtsAppScalarWhereWithAggregatesInput | TtsAppScalarWhereWithAggregatesInput[]
    OR?: TtsAppScalarWhereWithAggregatesInput[]
    NOT?: TtsAppScalarWhereWithAggregatesInput | TtsAppScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TtsApp"> | number
    app_key?: StringWithAggregatesFilter<"TtsApp"> | string
    app_secret?: StringWithAggregatesFilter<"TtsApp"> | string
    redirect_domain?: StringWithAggregatesFilter<"TtsApp"> | string
    success_path?: StringWithAggregatesFilter<"TtsApp"> | string
    failure_path?: StringWithAggregatesFilter<"TtsApp"> | string
    description?: StringWithAggregatesFilter<"TtsApp"> | string
    auth_url?: StringWithAggregatesFilter<"TtsApp"> | string
  }

  export type TtsShopWhereInput = {
    AND?: TtsShopWhereInput | TtsShopWhereInput[]
    OR?: TtsShopWhereInput[]
    NOT?: TtsShopWhereInput | TtsShopWhereInput[]
    id?: BigIntFilter<"TtsShop"> | bigint | number
    slug?: StringNullableFilter<"TtsShop"> | string | null
    encrypt_key?: StringNullableFilter<"TtsShop"> | string | null
    code?: StringFilter<"TtsShop"> | string
    name?: StringFilter<"TtsShop"> | string
    region?: StringFilter<"TtsShop"> | string
    seller_type?: StringFilter<"TtsShop"> | string
    cipher?: StringFilter<"TtsShop"> | string
    is_active?: BoolFilter<"TtsShop"> | boolean
    tokens?: TtsShopAppTokenListRelationFilter
  }

  export type TtsShopOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrderInput | SortOrder
    encrypt_key?: SortOrderInput | SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
    is_active?: SortOrder
    tokens?: TtsShopAppTokenOrderByRelationAggregateInput
    _relevance?: TtsShopOrderByRelevanceInput
  }

  export type TtsShopWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: TtsShopWhereInput | TtsShopWhereInput[]
    OR?: TtsShopWhereInput[]
    NOT?: TtsShopWhereInput | TtsShopWhereInput[]
    encrypt_key?: StringNullableFilter<"TtsShop"> | string | null
    code?: StringFilter<"TtsShop"> | string
    name?: StringFilter<"TtsShop"> | string
    region?: StringFilter<"TtsShop"> | string
    seller_type?: StringFilter<"TtsShop"> | string
    cipher?: StringFilter<"TtsShop"> | string
    is_active?: BoolFilter<"TtsShop"> | boolean
    tokens?: TtsShopAppTokenListRelationFilter
  }, "id" | "slug">

  export type TtsShopOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrderInput | SortOrder
    encrypt_key?: SortOrderInput | SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
    is_active?: SortOrder
    _count?: TtsShopCountOrderByAggregateInput
    _avg?: TtsShopAvgOrderByAggregateInput
    _max?: TtsShopMaxOrderByAggregateInput
    _min?: TtsShopMinOrderByAggregateInput
    _sum?: TtsShopSumOrderByAggregateInput
  }

  export type TtsShopScalarWhereWithAggregatesInput = {
    AND?: TtsShopScalarWhereWithAggregatesInput | TtsShopScalarWhereWithAggregatesInput[]
    OR?: TtsShopScalarWhereWithAggregatesInput[]
    NOT?: TtsShopScalarWhereWithAggregatesInput | TtsShopScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"TtsShop"> | bigint | number
    slug?: StringNullableWithAggregatesFilter<"TtsShop"> | string | null
    encrypt_key?: StringNullableWithAggregatesFilter<"TtsShop"> | string | null
    code?: StringWithAggregatesFilter<"TtsShop"> | string
    name?: StringWithAggregatesFilter<"TtsShop"> | string
    region?: StringWithAggregatesFilter<"TtsShop"> | string
    seller_type?: StringWithAggregatesFilter<"TtsShop"> | string
    cipher?: StringWithAggregatesFilter<"TtsShop"> | string
    is_active?: BoolWithAggregatesFilter<"TtsShop"> | boolean
  }

  export type TtsShopAppTokenWhereInput = {
    AND?: TtsShopAppTokenWhereInput | TtsShopAppTokenWhereInput[]
    OR?: TtsShopAppTokenWhereInput[]
    NOT?: TtsShopAppTokenWhereInput | TtsShopAppTokenWhereInput[]
    id?: IntFilter<"TtsShopAppToken"> | number
    shop_id?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    app_key?: StringFilter<"TtsShopAppToken"> | string
    access_token?: StringFilter<"TtsShopAppToken"> | string
    access_token_expire_in?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    refresh_token?: StringFilter<"TtsShopAppToken"> | string
    refresh_token_expire_in?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    open_id?: StringFilter<"TtsShopAppToken"> | string
    seller_name?: StringFilter<"TtsShopAppToken"> | string
    seller_base_region?: StringFilter<"TtsShopAppToken"> | string
    user_type?: IntFilter<"TtsShopAppToken"> | number
    granted_scopes?: JsonFilter<"TtsShopAppToken">
    status?: StringFilter<"TtsShopAppToken"> | string
    last_refreshed_at?: DateTimeNullableFilter<"TtsShopAppToken"> | Date | string | null
    created_at?: DateTimeFilter<"TtsShopAppToken"> | Date | string
    updated_at?: DateTimeFilter<"TtsShopAppToken"> | Date | string
    shop?: XOR<TtsShopScalarRelationFilter, TtsShopWhereInput>
    app?: XOR<TtsAppScalarRelationFilter, TtsAppWhereInput>
  }

  export type TtsShopAppTokenOrderByWithRelationInput = {
    id?: SortOrder
    shop_id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    granted_scopes?: SortOrder
    status?: SortOrder
    last_refreshed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shop?: TtsShopOrderByWithRelationInput
    app?: TtsAppOrderByWithRelationInput
    _relevance?: TtsShopAppTokenOrderByRelevanceInput
  }

  export type TtsShopAppTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shop_id_app_key?: TtsShopAppTokenShop_idApp_keyCompoundUniqueInput
    AND?: TtsShopAppTokenWhereInput | TtsShopAppTokenWhereInput[]
    OR?: TtsShopAppTokenWhereInput[]
    NOT?: TtsShopAppTokenWhereInput | TtsShopAppTokenWhereInput[]
    shop_id?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    app_key?: StringFilter<"TtsShopAppToken"> | string
    access_token?: StringFilter<"TtsShopAppToken"> | string
    access_token_expire_in?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    refresh_token?: StringFilter<"TtsShopAppToken"> | string
    refresh_token_expire_in?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    open_id?: StringFilter<"TtsShopAppToken"> | string
    seller_name?: StringFilter<"TtsShopAppToken"> | string
    seller_base_region?: StringFilter<"TtsShopAppToken"> | string
    user_type?: IntFilter<"TtsShopAppToken"> | number
    granted_scopes?: JsonFilter<"TtsShopAppToken">
    status?: StringFilter<"TtsShopAppToken"> | string
    last_refreshed_at?: DateTimeNullableFilter<"TtsShopAppToken"> | Date | string | null
    created_at?: DateTimeFilter<"TtsShopAppToken"> | Date | string
    updated_at?: DateTimeFilter<"TtsShopAppToken"> | Date | string
    shop?: XOR<TtsShopScalarRelationFilter, TtsShopWhereInput>
    app?: XOR<TtsAppScalarRelationFilter, TtsAppWhereInput>
  }, "id" | "shop_id_app_key">

  export type TtsShopAppTokenOrderByWithAggregationInput = {
    id?: SortOrder
    shop_id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    granted_scopes?: SortOrder
    status?: SortOrder
    last_refreshed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TtsShopAppTokenCountOrderByAggregateInput
    _avg?: TtsShopAppTokenAvgOrderByAggregateInput
    _max?: TtsShopAppTokenMaxOrderByAggregateInput
    _min?: TtsShopAppTokenMinOrderByAggregateInput
    _sum?: TtsShopAppTokenSumOrderByAggregateInput
  }

  export type TtsShopAppTokenScalarWhereWithAggregatesInput = {
    AND?: TtsShopAppTokenScalarWhereWithAggregatesInput | TtsShopAppTokenScalarWhereWithAggregatesInput[]
    OR?: TtsShopAppTokenScalarWhereWithAggregatesInput[]
    NOT?: TtsShopAppTokenScalarWhereWithAggregatesInput | TtsShopAppTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TtsShopAppToken"> | number
    shop_id?: BigIntWithAggregatesFilter<"TtsShopAppToken"> | bigint | number
    app_key?: StringWithAggregatesFilter<"TtsShopAppToken"> | string
    access_token?: StringWithAggregatesFilter<"TtsShopAppToken"> | string
    access_token_expire_in?: BigIntWithAggregatesFilter<"TtsShopAppToken"> | bigint | number
    refresh_token?: StringWithAggregatesFilter<"TtsShopAppToken"> | string
    refresh_token_expire_in?: BigIntWithAggregatesFilter<"TtsShopAppToken"> | bigint | number
    open_id?: StringWithAggregatesFilter<"TtsShopAppToken"> | string
    seller_name?: StringWithAggregatesFilter<"TtsShopAppToken"> | string
    seller_base_region?: StringWithAggregatesFilter<"TtsShopAppToken"> | string
    user_type?: IntWithAggregatesFilter<"TtsShopAppToken"> | number
    granted_scopes?: JsonWithAggregatesFilter<"TtsShopAppToken">
    status?: StringWithAggregatesFilter<"TtsShopAppToken"> | string
    last_refreshed_at?: DateTimeNullableWithAggregatesFilter<"TtsShopAppToken"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"TtsShopAppToken"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TtsShopAppToken"> | Date | string
  }

  export type ApiCredentialCreateInput = {
    app_key: string
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id: string
    seller_name: string
    seller_base_region: string
    user_type: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiCredentialUncheckedCreateInput = {
    id?: number
    app_key: string
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id: string
    seller_name: string
    seller_base_region: string
    user_type: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiCredentialUpdateInput = {
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCredentialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCredentialCreateManyInput = {
    id?: number
    app_key: string
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id: string
    seller_name: string
    seller_base_region: string
    user_type: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiCredentialUpdateManyMutationInput = {
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCredentialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateInput = {
    id: bigint | number
    code: string
    name: string
    region: string
    seller_type: string
    cipher: string
  }

  export type ShopUncheckedCreateInput = {
    id: bigint | number
    code: string
    name: string
    region: string
    seller_type: string
    cipher: string
  }

  export type ShopUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCreateManyInput = {
    id: bigint | number
    code: string
    name: string
    region: string
    seller_type: string
    cipher: string
  }

  export type ShopUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
  }

  export type AppCreateInput = {
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
  }

  export type AppUncheckedCreateInput = {
    id?: number
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
  }

  export type AppUpdateInput = {
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type AppUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type AppCreateManyInput = {
    id?: number
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
  }

  export type AppUpdateManyMutationInput = {
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type AppUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type TtsAppCreateInput = {
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
    tokens?: TtsShopAppTokenCreateNestedManyWithoutAppInput
  }

  export type TtsAppUncheckedCreateInput = {
    id?: number
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
    tokens?: TtsShopAppTokenUncheckedCreateNestedManyWithoutAppInput
  }

  export type TtsAppUpdateInput = {
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
    tokens?: TtsShopAppTokenUpdateManyWithoutAppNestedInput
  }

  export type TtsAppUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
    tokens?: TtsShopAppTokenUncheckedUpdateManyWithoutAppNestedInput
  }

  export type TtsAppCreateManyInput = {
    id?: number
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
  }

  export type TtsAppUpdateManyMutationInput = {
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type TtsAppUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type TtsShopCreateInput = {
    id: bigint | number
    slug?: string | null
    encrypt_key?: string | null
    code?: string
    name?: string
    region?: string
    seller_type?: string
    cipher?: string
    is_active?: boolean
    tokens?: TtsShopAppTokenCreateNestedManyWithoutShopInput
  }

  export type TtsShopUncheckedCreateInput = {
    id: bigint | number
    slug?: string | null
    encrypt_key?: string | null
    code?: string
    name?: string
    region?: string
    seller_type?: string
    cipher?: string
    is_active?: boolean
    tokens?: TtsShopAppTokenUncheckedCreateNestedManyWithoutShopInput
  }

  export type TtsShopUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    encrypt_key?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tokens?: TtsShopAppTokenUpdateManyWithoutShopNestedInput
  }

  export type TtsShopUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    encrypt_key?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tokens?: TtsShopAppTokenUncheckedUpdateManyWithoutShopNestedInput
  }

  export type TtsShopCreateManyInput = {
    id: bigint | number
    slug?: string | null
    encrypt_key?: string | null
    code?: string
    name?: string
    region?: string
    seller_type?: string
    cipher?: string
    is_active?: boolean
  }

  export type TtsShopUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    encrypt_key?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TtsShopUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    encrypt_key?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TtsShopAppTokenCreateInput = {
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    shop: TtsShopCreateNestedOneWithoutTokensInput
    app: TtsAppCreateNestedOneWithoutTokensInput
  }

  export type TtsShopAppTokenUncheckedCreateInput = {
    id?: number
    shop_id: bigint | number
    app_key: string
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TtsShopAppTokenUpdateInput = {
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: TtsShopUpdateOneRequiredWithoutTokensNestedInput
    app?: TtsAppUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TtsShopAppTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: BigIntFieldUpdateOperationsInput | bigint | number
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TtsShopAppTokenCreateManyInput = {
    id?: number
    shop_id: bigint | number
    app_key: string
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TtsShopAppTokenUpdateManyMutationInput = {
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TtsShopAppTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: BigIntFieldUpdateOperationsInput | bigint | number
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApiCredentialOrderByRelevanceInput = {
    fields: ApiCredentialOrderByRelevanceFieldEnum | ApiCredentialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApiCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    granted_scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiCredentialAvgOrderByAggregateInput = {
    id?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token_expire_in?: SortOrder
    user_type?: SortOrder
  }

  export type ApiCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiCredentialSumOrderByAggregateInput = {
    id?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token_expire_in?: SortOrder
    user_type?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShopOrderByRelevanceInput = {
    fields: ShopOrderByRelevanceFieldEnum | ShopOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppOrderByRelevanceInput = {
    fields: AppOrderByRelevanceFieldEnum | AppOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppCountOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
  }

  export type AppAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppMaxOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
  }

  export type AppMinOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
  }

  export type AppSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TtsShopAppTokenListRelationFilter = {
    every?: TtsShopAppTokenWhereInput
    some?: TtsShopAppTokenWhereInput
    none?: TtsShopAppTokenWhereInput
  }

  export type TtsShopAppTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TtsAppOrderByRelevanceInput = {
    fields: TtsAppOrderByRelevanceFieldEnum | TtsAppOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TtsAppCountOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
  }

  export type TtsAppAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TtsAppMaxOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
  }

  export type TtsAppMinOrderByAggregateInput = {
    id?: SortOrder
    app_key?: SortOrder
    app_secret?: SortOrder
    redirect_domain?: SortOrder
    success_path?: SortOrder
    failure_path?: SortOrder
    description?: SortOrder
    auth_url?: SortOrder
  }

  export type TtsAppSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TtsShopOrderByRelevanceInput = {
    fields: TtsShopOrderByRelevanceFieldEnum | TtsShopOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TtsShopCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    encrypt_key?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
    is_active?: SortOrder
  }

  export type TtsShopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TtsShopMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    encrypt_key?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
    is_active?: SortOrder
  }

  export type TtsShopMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    encrypt_key?: SortOrder
    code?: SortOrder
    name?: SortOrder
    region?: SortOrder
    seller_type?: SortOrder
    cipher?: SortOrder
    is_active?: SortOrder
  }

  export type TtsShopSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TtsShopScalarRelationFilter = {
    is?: TtsShopWhereInput
    isNot?: TtsShopWhereInput
  }

  export type TtsAppScalarRelationFilter = {
    is?: TtsAppWhereInput
    isNot?: TtsAppWhereInput
  }

  export type TtsShopAppTokenOrderByRelevanceInput = {
    fields: TtsShopAppTokenOrderByRelevanceFieldEnum | TtsShopAppTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TtsShopAppTokenShop_idApp_keyCompoundUniqueInput = {
    shop_id: bigint | number
    app_key: string
  }

  export type TtsShopAppTokenCountOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    granted_scopes?: SortOrder
    status?: SortOrder
    last_refreshed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TtsShopAppTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token_expire_in?: SortOrder
    user_type?: SortOrder
  }

  export type TtsShopAppTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    last_refreshed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TtsShopAppTokenMinOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    app_key?: SortOrder
    access_token?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expire_in?: SortOrder
    open_id?: SortOrder
    seller_name?: SortOrder
    seller_base_region?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    last_refreshed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TtsShopAppTokenSumOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    access_token_expire_in?: SortOrder
    refresh_token_expire_in?: SortOrder
    user_type?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TtsShopAppTokenCreateNestedManyWithoutAppInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutAppInput, TtsShopAppTokenUncheckedCreateWithoutAppInput> | TtsShopAppTokenCreateWithoutAppInput[] | TtsShopAppTokenUncheckedCreateWithoutAppInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutAppInput | TtsShopAppTokenCreateOrConnectWithoutAppInput[]
    createMany?: TtsShopAppTokenCreateManyAppInputEnvelope
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
  }

  export type TtsShopAppTokenUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutAppInput, TtsShopAppTokenUncheckedCreateWithoutAppInput> | TtsShopAppTokenCreateWithoutAppInput[] | TtsShopAppTokenUncheckedCreateWithoutAppInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutAppInput | TtsShopAppTokenCreateOrConnectWithoutAppInput[]
    createMany?: TtsShopAppTokenCreateManyAppInputEnvelope
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
  }

  export type TtsShopAppTokenUpdateManyWithoutAppNestedInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutAppInput, TtsShopAppTokenUncheckedCreateWithoutAppInput> | TtsShopAppTokenCreateWithoutAppInput[] | TtsShopAppTokenUncheckedCreateWithoutAppInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutAppInput | TtsShopAppTokenCreateOrConnectWithoutAppInput[]
    upsert?: TtsShopAppTokenUpsertWithWhereUniqueWithoutAppInput | TtsShopAppTokenUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: TtsShopAppTokenCreateManyAppInputEnvelope
    set?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    disconnect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    delete?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    update?: TtsShopAppTokenUpdateWithWhereUniqueWithoutAppInput | TtsShopAppTokenUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: TtsShopAppTokenUpdateManyWithWhereWithoutAppInput | TtsShopAppTokenUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: TtsShopAppTokenScalarWhereInput | TtsShopAppTokenScalarWhereInput[]
  }

  export type TtsShopAppTokenUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutAppInput, TtsShopAppTokenUncheckedCreateWithoutAppInput> | TtsShopAppTokenCreateWithoutAppInput[] | TtsShopAppTokenUncheckedCreateWithoutAppInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutAppInput | TtsShopAppTokenCreateOrConnectWithoutAppInput[]
    upsert?: TtsShopAppTokenUpsertWithWhereUniqueWithoutAppInput | TtsShopAppTokenUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: TtsShopAppTokenCreateManyAppInputEnvelope
    set?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    disconnect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    delete?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    update?: TtsShopAppTokenUpdateWithWhereUniqueWithoutAppInput | TtsShopAppTokenUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: TtsShopAppTokenUpdateManyWithWhereWithoutAppInput | TtsShopAppTokenUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: TtsShopAppTokenScalarWhereInput | TtsShopAppTokenScalarWhereInput[]
  }

  export type TtsShopAppTokenCreateNestedManyWithoutShopInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutShopInput, TtsShopAppTokenUncheckedCreateWithoutShopInput> | TtsShopAppTokenCreateWithoutShopInput[] | TtsShopAppTokenUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutShopInput | TtsShopAppTokenCreateOrConnectWithoutShopInput[]
    createMany?: TtsShopAppTokenCreateManyShopInputEnvelope
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
  }

  export type TtsShopAppTokenUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutShopInput, TtsShopAppTokenUncheckedCreateWithoutShopInput> | TtsShopAppTokenCreateWithoutShopInput[] | TtsShopAppTokenUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutShopInput | TtsShopAppTokenCreateOrConnectWithoutShopInput[]
    createMany?: TtsShopAppTokenCreateManyShopInputEnvelope
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TtsShopAppTokenUpdateManyWithoutShopNestedInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutShopInput, TtsShopAppTokenUncheckedCreateWithoutShopInput> | TtsShopAppTokenCreateWithoutShopInput[] | TtsShopAppTokenUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutShopInput | TtsShopAppTokenCreateOrConnectWithoutShopInput[]
    upsert?: TtsShopAppTokenUpsertWithWhereUniqueWithoutShopInput | TtsShopAppTokenUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: TtsShopAppTokenCreateManyShopInputEnvelope
    set?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    disconnect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    delete?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    update?: TtsShopAppTokenUpdateWithWhereUniqueWithoutShopInput | TtsShopAppTokenUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: TtsShopAppTokenUpdateManyWithWhereWithoutShopInput | TtsShopAppTokenUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: TtsShopAppTokenScalarWhereInput | TtsShopAppTokenScalarWhereInput[]
  }

  export type TtsShopAppTokenUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<TtsShopAppTokenCreateWithoutShopInput, TtsShopAppTokenUncheckedCreateWithoutShopInput> | TtsShopAppTokenCreateWithoutShopInput[] | TtsShopAppTokenUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TtsShopAppTokenCreateOrConnectWithoutShopInput | TtsShopAppTokenCreateOrConnectWithoutShopInput[]
    upsert?: TtsShopAppTokenUpsertWithWhereUniqueWithoutShopInput | TtsShopAppTokenUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: TtsShopAppTokenCreateManyShopInputEnvelope
    set?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    disconnect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    delete?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    connect?: TtsShopAppTokenWhereUniqueInput | TtsShopAppTokenWhereUniqueInput[]
    update?: TtsShopAppTokenUpdateWithWhereUniqueWithoutShopInput | TtsShopAppTokenUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: TtsShopAppTokenUpdateManyWithWhereWithoutShopInput | TtsShopAppTokenUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: TtsShopAppTokenScalarWhereInput | TtsShopAppTokenScalarWhereInput[]
  }

  export type TtsShopCreateNestedOneWithoutTokensInput = {
    create?: XOR<TtsShopCreateWithoutTokensInput, TtsShopUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TtsShopCreateOrConnectWithoutTokensInput
    connect?: TtsShopWhereUniqueInput
  }

  export type TtsAppCreateNestedOneWithoutTokensInput = {
    create?: XOR<TtsAppCreateWithoutTokensInput, TtsAppUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TtsAppCreateOrConnectWithoutTokensInput
    connect?: TtsAppWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TtsShopUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<TtsShopCreateWithoutTokensInput, TtsShopUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TtsShopCreateOrConnectWithoutTokensInput
    upsert?: TtsShopUpsertWithoutTokensInput
    connect?: TtsShopWhereUniqueInput
    update?: XOR<XOR<TtsShopUpdateToOneWithWhereWithoutTokensInput, TtsShopUpdateWithoutTokensInput>, TtsShopUncheckedUpdateWithoutTokensInput>
  }

  export type TtsAppUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<TtsAppCreateWithoutTokensInput, TtsAppUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TtsAppCreateOrConnectWithoutTokensInput
    upsert?: TtsAppUpsertWithoutTokensInput
    connect?: TtsAppWhereUniqueInput
    update?: XOR<XOR<TtsAppUpdateToOneWithWhereWithoutTokensInput, TtsAppUpdateWithoutTokensInput>, TtsAppUncheckedUpdateWithoutTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TtsShopAppTokenCreateWithoutAppInput = {
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    shop: TtsShopCreateNestedOneWithoutTokensInput
  }

  export type TtsShopAppTokenUncheckedCreateWithoutAppInput = {
    id?: number
    shop_id: bigint | number
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TtsShopAppTokenCreateOrConnectWithoutAppInput = {
    where: TtsShopAppTokenWhereUniqueInput
    create: XOR<TtsShopAppTokenCreateWithoutAppInput, TtsShopAppTokenUncheckedCreateWithoutAppInput>
  }

  export type TtsShopAppTokenCreateManyAppInputEnvelope = {
    data: TtsShopAppTokenCreateManyAppInput | TtsShopAppTokenCreateManyAppInput[]
    skipDuplicates?: boolean
  }

  export type TtsShopAppTokenUpsertWithWhereUniqueWithoutAppInput = {
    where: TtsShopAppTokenWhereUniqueInput
    update: XOR<TtsShopAppTokenUpdateWithoutAppInput, TtsShopAppTokenUncheckedUpdateWithoutAppInput>
    create: XOR<TtsShopAppTokenCreateWithoutAppInput, TtsShopAppTokenUncheckedCreateWithoutAppInput>
  }

  export type TtsShopAppTokenUpdateWithWhereUniqueWithoutAppInput = {
    where: TtsShopAppTokenWhereUniqueInput
    data: XOR<TtsShopAppTokenUpdateWithoutAppInput, TtsShopAppTokenUncheckedUpdateWithoutAppInput>
  }

  export type TtsShopAppTokenUpdateManyWithWhereWithoutAppInput = {
    where: TtsShopAppTokenScalarWhereInput
    data: XOR<TtsShopAppTokenUpdateManyMutationInput, TtsShopAppTokenUncheckedUpdateManyWithoutAppInput>
  }

  export type TtsShopAppTokenScalarWhereInput = {
    AND?: TtsShopAppTokenScalarWhereInput | TtsShopAppTokenScalarWhereInput[]
    OR?: TtsShopAppTokenScalarWhereInput[]
    NOT?: TtsShopAppTokenScalarWhereInput | TtsShopAppTokenScalarWhereInput[]
    id?: IntFilter<"TtsShopAppToken"> | number
    shop_id?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    app_key?: StringFilter<"TtsShopAppToken"> | string
    access_token?: StringFilter<"TtsShopAppToken"> | string
    access_token_expire_in?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    refresh_token?: StringFilter<"TtsShopAppToken"> | string
    refresh_token_expire_in?: BigIntFilter<"TtsShopAppToken"> | bigint | number
    open_id?: StringFilter<"TtsShopAppToken"> | string
    seller_name?: StringFilter<"TtsShopAppToken"> | string
    seller_base_region?: StringFilter<"TtsShopAppToken"> | string
    user_type?: IntFilter<"TtsShopAppToken"> | number
    granted_scopes?: JsonFilter<"TtsShopAppToken">
    status?: StringFilter<"TtsShopAppToken"> | string
    last_refreshed_at?: DateTimeNullableFilter<"TtsShopAppToken"> | Date | string | null
    created_at?: DateTimeFilter<"TtsShopAppToken"> | Date | string
    updated_at?: DateTimeFilter<"TtsShopAppToken"> | Date | string
  }

  export type TtsShopAppTokenCreateWithoutShopInput = {
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    app: TtsAppCreateNestedOneWithoutTokensInput
  }

  export type TtsShopAppTokenUncheckedCreateWithoutShopInput = {
    id?: number
    app_key: string
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TtsShopAppTokenCreateOrConnectWithoutShopInput = {
    where: TtsShopAppTokenWhereUniqueInput
    create: XOR<TtsShopAppTokenCreateWithoutShopInput, TtsShopAppTokenUncheckedCreateWithoutShopInput>
  }

  export type TtsShopAppTokenCreateManyShopInputEnvelope = {
    data: TtsShopAppTokenCreateManyShopInput | TtsShopAppTokenCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type TtsShopAppTokenUpsertWithWhereUniqueWithoutShopInput = {
    where: TtsShopAppTokenWhereUniqueInput
    update: XOR<TtsShopAppTokenUpdateWithoutShopInput, TtsShopAppTokenUncheckedUpdateWithoutShopInput>
    create: XOR<TtsShopAppTokenCreateWithoutShopInput, TtsShopAppTokenUncheckedCreateWithoutShopInput>
  }

  export type TtsShopAppTokenUpdateWithWhereUniqueWithoutShopInput = {
    where: TtsShopAppTokenWhereUniqueInput
    data: XOR<TtsShopAppTokenUpdateWithoutShopInput, TtsShopAppTokenUncheckedUpdateWithoutShopInput>
  }

  export type TtsShopAppTokenUpdateManyWithWhereWithoutShopInput = {
    where: TtsShopAppTokenScalarWhereInput
    data: XOR<TtsShopAppTokenUpdateManyMutationInput, TtsShopAppTokenUncheckedUpdateManyWithoutShopInput>
  }

  export type TtsShopCreateWithoutTokensInput = {
    id: bigint | number
    slug?: string | null
    encrypt_key?: string | null
    code?: string
    name?: string
    region?: string
    seller_type?: string
    cipher?: string
    is_active?: boolean
  }

  export type TtsShopUncheckedCreateWithoutTokensInput = {
    id: bigint | number
    slug?: string | null
    encrypt_key?: string | null
    code?: string
    name?: string
    region?: string
    seller_type?: string
    cipher?: string
    is_active?: boolean
  }

  export type TtsShopCreateOrConnectWithoutTokensInput = {
    where: TtsShopWhereUniqueInput
    create: XOR<TtsShopCreateWithoutTokensInput, TtsShopUncheckedCreateWithoutTokensInput>
  }

  export type TtsAppCreateWithoutTokensInput = {
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
  }

  export type TtsAppUncheckedCreateWithoutTokensInput = {
    id?: number
    app_key: string
    app_secret: string
    redirect_domain: string
    success_path: string
    failure_path: string
    description: string
    auth_url?: string
  }

  export type TtsAppCreateOrConnectWithoutTokensInput = {
    where: TtsAppWhereUniqueInput
    create: XOR<TtsAppCreateWithoutTokensInput, TtsAppUncheckedCreateWithoutTokensInput>
  }

  export type TtsShopUpsertWithoutTokensInput = {
    update: XOR<TtsShopUpdateWithoutTokensInput, TtsShopUncheckedUpdateWithoutTokensInput>
    create: XOR<TtsShopCreateWithoutTokensInput, TtsShopUncheckedCreateWithoutTokensInput>
    where?: TtsShopWhereInput
  }

  export type TtsShopUpdateToOneWithWhereWithoutTokensInput = {
    where?: TtsShopWhereInput
    data: XOR<TtsShopUpdateWithoutTokensInput, TtsShopUncheckedUpdateWithoutTokensInput>
  }

  export type TtsShopUpdateWithoutTokensInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    encrypt_key?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TtsShopUncheckedUpdateWithoutTokensInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    encrypt_key?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    seller_type?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TtsAppUpsertWithoutTokensInput = {
    update: XOR<TtsAppUpdateWithoutTokensInput, TtsAppUncheckedUpdateWithoutTokensInput>
    create: XOR<TtsAppCreateWithoutTokensInput, TtsAppUncheckedCreateWithoutTokensInput>
    where?: TtsAppWhereInput
  }

  export type TtsAppUpdateToOneWithWhereWithoutTokensInput = {
    where?: TtsAppWhereInput
    data: XOR<TtsAppUpdateWithoutTokensInput, TtsAppUncheckedUpdateWithoutTokensInput>
  }

  export type TtsAppUpdateWithoutTokensInput = {
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type TtsAppUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    app_secret?: StringFieldUpdateOperationsInput | string
    redirect_domain?: StringFieldUpdateOperationsInput | string
    success_path?: StringFieldUpdateOperationsInput | string
    failure_path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    auth_url?: StringFieldUpdateOperationsInput | string
  }

  export type TtsShopAppTokenCreateManyAppInput = {
    id?: number
    shop_id: bigint | number
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TtsShopAppTokenUpdateWithoutAppInput = {
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: TtsShopUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TtsShopAppTokenUncheckedUpdateWithoutAppInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: BigIntFieldUpdateOperationsInput | bigint | number
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TtsShopAppTokenUncheckedUpdateManyWithoutAppInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: BigIntFieldUpdateOperationsInput | bigint | number
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TtsShopAppTokenCreateManyShopInput = {
    id?: number
    app_key: string
    access_token: string
    access_token_expire_in: bigint | number
    refresh_token: string
    refresh_token_expire_in: bigint | number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number
    granted_scopes: JsonNullValueInput | InputJsonValue
    status?: string
    last_refreshed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TtsShopAppTokenUpdateWithoutShopInput = {
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    app?: TtsAppUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TtsShopAppTokenUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TtsShopAppTokenUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_key?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    access_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    refresh_token_expire_in?: BigIntFieldUpdateOperationsInput | bigint | number
    open_id?: StringFieldUpdateOperationsInput | string
    seller_name?: StringFieldUpdateOperationsInput | string
    seller_base_region?: StringFieldUpdateOperationsInput | string
    user_type?: IntFieldUpdateOperationsInput | number
    granted_scopes?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    last_refreshed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}