type answer_01 = 64 extends number ? true : false;

type answer_02 = number extends 64 ? true : false;

type answer_03 = string[] extends any ? true : false;

type answer_04 = string[] extends any[] ? true : false;

type answer_05 = never extends any ? true : false;

type answer_06 = any extends any ? true : false;

type answer_07 = Date extends { new(...args: any[]): any} ? true : false;

type answer_08 = typeof Date extends { new(args: any[]): any } ? true : false;

export {}