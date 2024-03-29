create table "public"."pricing" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "price" integer,
    "name" text,
    "quantity" text,
    "info" text[]
);


alter table "public"."pricing" enable row level security;

CREATE UNIQUE INDEX pricing_pkey ON public.pricing USING btree (id);

alter table "public"."pricing" add constraint "pricing_pkey" PRIMARY KEY using index "pricing_pkey";

grant delete on table "public"."pricing" to "anon";

grant insert on table "public"."pricing" to "anon";

grant references on table "public"."pricing" to "anon";

grant select on table "public"."pricing" to "anon";

grant trigger on table "public"."pricing" to "anon";

grant truncate on table "public"."pricing" to "anon";

grant update on table "public"."pricing" to "anon";

grant delete on table "public"."pricing" to "authenticated";

grant insert on table "public"."pricing" to "authenticated";

grant references on table "public"."pricing" to "authenticated";

grant select on table "public"."pricing" to "authenticated";

grant trigger on table "public"."pricing" to "authenticated";

grant truncate on table "public"."pricing" to "authenticated";

grant update on table "public"."pricing" to "authenticated";

grant delete on table "public"."pricing" to "service_role";

grant insert on table "public"."pricing" to "service_role";

grant references on table "public"."pricing" to "service_role";

grant select on table "public"."pricing" to "service_role";

grant trigger on table "public"."pricing" to "service_role";

grant truncate on table "public"."pricing" to "service_role";

grant update on table "public"."pricing" to "service_role";


