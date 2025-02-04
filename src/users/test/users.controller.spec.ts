import { JwtService } from "@nestjs/jwt";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { Test } from "@nestjs/testing";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";
import { User } from "../models/user.model";

jest.mock("../users.service");

describe("UsersController", () => {
  let usersController: UsersController;
  let usersServise: UsersService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = moduleRef.get(UsersController);
    usersServise = moduleRef.get(UsersService);
    jest.clearAllMocks();
  });
  it("User Controller should be defined", () => {
    expect(usersController).toBeDefined();
  });

  it("User Controller should be defined", () => {
    expect(usersController).toBeDefined();
  });

  describe("create user", () => {
    describe("when create user is called", () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
          value: userStub().value,
        };
        user = await usersController.create(createUserDto);
        console.log(user);
      });
      test("then it should vay bana naban", () => {
        expect(usersServise.create).toHaveBeenCalledWith(createUserDto);
      });
    });
  });


  describe("find all " , ()=> {
    describe(" when findall users is called ", ()=> {
        let users : User[];
  
        beforeAll(async () => {
            users = await usersController.findAll()
  
        })
  
        test(" then is should call userservises findall method", () => {
            expect(usersServise.findAll).toHaveBeenCalled()
        })
  
        test("then it should call users", () => {
            expect(users).toEqual([userStub()])
        })
  
    })
  })


  describe("find one " , ()=> {
    describe(" when find one user is called ", ()=> {
        let user : User | null;
  
        beforeAll(async () => {

            user = await usersController.findOne(userStub().id) 
  
        })
  
        test(" then is should call userservises find one method", () => {
            expect(usersServise.findOne).toHaveBeenCalled()
        })
  
        test("then it should call users", () => {
            expect(user).toEqual(userStub())
        })
  
    })
  })
});





;



