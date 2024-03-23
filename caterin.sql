PGDMP     6                    |            catering    14.6    14.6     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    123462    catering    DATABASE     g   CREATE DATABASE catering WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE catering;
                postgres    false            �            1259    123489    producto    TABLE     j  CREATE TABLE public.producto (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    price character varying(80) NOT NULL,
    image character varying(255),
    is_available boolean,
    created_at timestamp(0) without time zone NOT NULL,
    updated_at timestamp(0) without time zone NOT NULL
);
    DROP TABLE public.producto;
       public         heap    postgres    false            �            1259    123488    producto_id_seq    SEQUENCE     x   CREATE SEQUENCE public.producto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.producto_id_seq;
       public          postgres    false    210            �           0    0    producto_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.producto_id_seq OWNED BY public.producto.id;
          public          postgres    false    209            \           2604    123492    producto id    DEFAULT     j   ALTER TABLE ONLY public.producto ALTER COLUMN id SET DEFAULT nextval('public.producto_id_seq'::regclass);
 :   ALTER TABLE public.producto ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �          0    123489    producto 
   TABLE DATA           m   COPY public.producto (id, name, description, price, image, is_available, created_at, updated_at) FROM stdin;
    public          postgres    false    210   �       �           0    0    producto_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.producto_id_seq', 10, true);
          public          postgres    false    209            ^           2606    123496    producto producto_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    210            `           2606    123498    producto producto_price_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_price_key UNIQUE (price);
 E   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_price_key;
       public            postgres    false    210            �     x���an� ��)�� Z���z�MVGK�B��e��������y�ez漝�1Z��?�aԑ��a6�^�Q�w+�F����A0�h�aՠ�&$�a�1���z6>EC��^/T-�.+igB�����:?��c/;Q���l��mm����;z)�������&���	M����P�U�8ӊ�4��f&��(��ïk�q4�@�R�G�>���iG6z�l�~ܐ�Ė��o���D?��A��l��J��d{���(�O�u��     