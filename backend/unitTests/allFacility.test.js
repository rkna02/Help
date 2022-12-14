//mongoclinet for facility module
const { MongoClient } = require("mongodb");
// const insertFacility = require("../facilityManagement/insertFacility");
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)

const SomeClass = require("/home/azureuser/Test 1/facility/FacilityDisplay/typeSelection");
jest.mock("/home/azureuser/Test 1/facility/FacilityDisplay/typeSelection"); // this happens automatically with automocking
const mockMethod = jest.fn(()=>"entertainments");
SomeClass.mockImplementation(() => {
  return {
    typeSelection: mockMethod,
  };
});
const Some = new SomeClass();
Some.typeSelection(6);
console.log('Calls to method: ', mockMethod.mock.calls);

const FindFacility = require("/home/azureuser/Test 1/facility/FacilityDisplay/findAfacility.js")

const test2 = {
  result: [
    [
      12,
      0,
      'Rose Garden',
      'has roses and a lot of stuff and yeah. A great place for relaxation.',
      '2022/6/27'
    ],
    [
      11,
      0,
      'Iona Island (British Columbia)',
      'Iona Island in Richmond, British Columbia, Canada was formerly an island, but is now a peninsula physically connected to Sea Island via a causeway and Ferguson Road. Iona is home to a primary sewage treatment plant (located in the middle), an animal refuge and a park (Iona Beach Regional Park). The Iona Sewage Plant is located near the centre of the island and has tours for the public. Iona Beach Regional Park also features a beach adjacent to wildlife from the nearby animal refuge. The park is managed by Metro Vancouver. Iona Island is located almost adjacent to the Vancouver International Airport. The park is mostly visited by birders, as the sewage ponds have attracted many rare shorebirds such as Spoon-billed Sandpiper, Great Knot, and Red-necked Stint.',
      '2022/6/19'
    ],
    [
      10,
      0,
      'Tower Beach',
      'Discover this 6.4-km out-and-back trail near Greater Vancouver A, British Columbia. Generally considered an easy route, it takes an average of 1 h 38 min to complete. This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.',
      '2022/6/11'
    ],
    [
      9,
      0,
      'Acadia Beach',
      'Small, stone-covered beach offering a grassy area with picnic tables & distant views of the city.',
      '2022/6/11'
    ],
    [
      8,
      2.5,
      'Spanish Banks Beach',
      'Bustling sandy beach offering tidal flats for skimboarders & kitesurfers, plus volleyball courts.',
      '2022/6/11'
    ],
    [
      7,
      0,
      'Oasis Beach\n',
      'Oasis Beach is part of Wreck Beach and can be accessed along Trail 7. Trail 7 is a scenic and beautiful trail and there are waterfalls and creeks as well as foliage. The trail has recently been improved with the addition of handrails and better stairs.',
      '2022/6/11'
    ],
    [
      6,
      4.3061224489795915,
      'Thunderbird Basketball Court',
      "Construction is in progress on a new outdoor basketball court at the University of British Columbia's Point Grey campus.",
      '2022/07/06'
    ],
    [
      5,
      4.423728813559322,
      'UBC Tennis Centre',
      'The UBC Tennis Centre has a total of 12 indoor courts and 1 outdoor court.',
      '2022/07/06'
    ],
    [
      4,
      0.4,
      'UBC Aquatic Centre',
      'The UBC Aquatic Centre is a state-of-the-art facility that serves athletic training, competition, and neighbourhood leisure needs.',
      '2022/07/06'
    ],
    [
      3,
      0.3,
      'BirdCoop Fitness Centre',
      'Close to ARC and it offers rock climbing',
      '2022/07/06'
    ],
    [
      2,
      2.5,
      'ARC',
      'The ARC opened in February 2018 and is focused on creating a comfortable, welcoming, and inclusive environment for those new to fitness and training activities.',
      '2022/07/06'
    ],
    [
      1,
      4,
      'AMS Student Nest',
      'The AMS Student Nest is a campus hub for students to eat, shop, socialize and study.',
      '2022/07/06'
    ]
  ],
  length: 12
}

const sample2 = {
  "_id" : 14,
  "facility" : {
          "facilityType" : "entertainments",
          "facility_status" : "normal",
          "facilityTitle" : "the play",
          "facilityDescription" : "this is used for testing, please igrone it, no meaning for information.",
          "facilityImageLink" : "https://s3.bmp.ovh/imgs/2022/07/30/eaf4b087a33cb056.jpg",
          "facilityOverallRate" : 0,
          "numberOfRates" : 0,
          "timeAdded" : "2022/6/30",
          "longitude" : -123.11796910000001,
          "latitude" : 49.2319166
  },
  "rated_user" : [
          {

          }
  ],
  "reviews" : [
          {

          },
          {
                  "replierID" : "lufei8351@gmail.com",
                  "userName" : "Peter Na",
                  "rateScore" : 3,
                  "upVotes" : 0,
                  "downVotes" : 0,
                  "replyContent" : "Great overall experience!",
                  "timeOfReply" : "2022/7/5/2/4/32"
          }
  ],
  "adderID" : "l2542293790@gmail.com"
}

const SomeClass2 = require("/home/azureuser/Test 1/facility/FacilityDisplay/newestFacilityReturnLogic");
jest.mock("/home/azureuser/Test 1/facility/FacilityDisplay/newestFacilityReturnLogic"); // this happens automatically with automocking
const mockMethod2 = jest.fn(()=>test2);
SomeClass2.mockImplementation(() => {
  return {
    newestFacilityReturnLogic: mockMethod2,
  };
});
const some2 = new SomeClass2();
some2.newestFacilityReturnLogic({});
console.log('Calls to method: ', mockMethod.mock.calls);


const findFacility_Many = require('/home/azureuser/Test 1/facility/FacilityDisplay/findMany');
//const typeSelection = require("../FacilityDisplay/typeSelection");
const searchFacility = require('../facility/FacilityDisplay/searchOne')
const blockFacility = require('/home/azureuser/Test 1/facility/facilityManagement/blockFacility')
const addFacility = require('/home/azureuser/Test 1/facility/facilityManagement/insertFacility')
const reportFacility = require('/home/azureuser/Test 1/facility/facilityManagement/reportFacility')

// const typeSelection = jest.fn();
// typeSelection()

// beforeAll(done => {
//   done()
// })

//test 1 --> interface findAFacility

const Find = new FindFacility()
describe('testing findAFacility', () => {
  // beforeEach(() => {
    
  // })  

  
  it('missing field', async () => {
    expect(await Find.findAfacility("", "", "", "")).toEqual({
      result:"unsuccesful find with missing field"
    });  
    expect(await Find.findAfacility(client, null, 1, "")).toEqual({
      result:"unsuccesful find with missing field"
    }); 
  })


  it('serach for review', async () => {
    expect(await Find.findAfacility(client, 1, 1,"wuyuheng0525@gmail.com")).toEqual(null);   
  })

  
  
  // it('get entertainments type success', async () => {
  //   expect(await Find.findAfacility(client, 2, 1, "array")).toEqual( [{"_id": 1, "adderID": "", "facility": {"facilityDescription": "The AMS Student Nest is a campus hub for students to eat, shop, socialize and study.", "facilityImageLink": "https://cdn.discordapp.com/attachments/984213736652935230/994306235526557746/unknown.png", "facilityOverallRate": 4, "facilityTitle": "AMS Student Nest", "facilityType": "entertainments", "facility_status": "normal", "latitude": 49.2664, "longitude": -123.25, "numberOfRates": 2, "timeAdded": "2022/07/06"}, "ratedUser": [{"replierID": "l2542293790@gmail.com"}, {"replierID": "xyjyeducation@gmail.com"}], "reviews": [{"downVotes": 0, "rateScore": 3, "replierID": "l2542293790@gmail.com", "replyContent": "a", "timeOfReply": "2022/6/18/23/56/38", "upVotes": 0, "userName": "Linxin Li"}, {"downVotes": 0, "rateScore": 5, "replierID": "xyjyeducation@gmail.com", "replyContent": "Best!", "timeOfReply": "2022/6/19/6/52/58", "upVotes": 0, "userName": "Wilson Wang"}]}]);  
  // })
  
  it('find sucessful with non-array input', async () => {
      expect(await Find.findAfacility(client, 2, 3,  "")).toEqual(  {
        "_id" : 3,
        "facility" : {
                "facility_status" : "normal",
                "facilityType" : "entertainments",
                "facilityTitle" : "BirdCoop Fitness Centre",
                "facilityDescription" : "Close to ARC and it offers rock climbing",
                "timeAdded" : "2022/07/06",
                "facilityImageLink" : "https://cdn.discordapp.com/attachments/984213736652935230/994309297385250816/unknown.png",
                "facilityOverallRate" : 0.3,
                "numberOfRates" : 0,
                "longitude" : -123.24895,
                "latitude" : 49.26836
        },
        "ratedUser" : [ ],
        "reviews" : [ ],
        "adderID" : ""
      });  
  })

  it('find sucessful with array input', async () => {
    
    expect(await Find.findAfacility(client,2,14,"array")).toEqual([sample2]);  
})
 
  
})


// //test 2 --> interface findMany
describe('testing findManyFacility', () => {

  it('missing field', async () => {
    expect(await findFacility_Many(client)).toEqual({"result": "unsuccesful find with invalid type"});  
  })

  it('invalid input', async () => {
    expect(await findFacility_Many(client,"@%^%#^&%@#^&%#")).toEqual({"result": "unsuccesful find with invalid type"});  
  })

  it('sucess of find many', async () => {
    expect(await findFacility_Many(client, "entertainments")).toEqual(test2);  
  })
    
})

//test 3 --> interface searchOne
describe('testing search facility by keyword', () => {
  test('missing field',async () => {
    expect(await  searchFacility(client)).toEqual({"result":"unsuccesful search with missing field"});  
  })

 
  test('valid search with expected result',async () => {
    expect(await  searchFacility(client,"entertainments", "Tower Beach")).toEqual( {result: [
      [
        10,
        0,
        'Tower Beach',
        'Discover this 6.4-km out-and-back trail near Greater Vancouver A, British Columbia. Generally considered an easy route, it takes an average of 1 h 38 min to complete. This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.',
        '2022/6/11'
      ]
    ],
    length: 1
  });  
  })
   
})


//test 3 --> interface searchOne
describe('testing search facility by keyword', () => {
  test('missing field',async () => {
    expect(await  searchFacility(client)).toEqual({"result":"unsuccesful search with missing field"});  
  })

 
  test('valid search with expected result',async () => {
    expect(await  searchFacility(client,"entertainments", "Tower Beach")).toEqual( {result: [
      [
        10,
        0,
        'Tower Beach',
        'Discover this 6.4-km out-and-back trail near Greater Vancouver A, British Columbia. Generally considered an easy route, it takes an average of 1 h 38 min to complete. This is a popular trail for birding, hiking, and trail running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.',
        '2022/6/11'
      ]
    ],
    length: 1
  });  
  })
   
})


//test 4 --> interface blockFacility
describe('testing block facility', () => {
  test('missing field',async () => {
    expect(await  blockFacility(client,"Help!Db", "","")).toEqual({"result":"unsuccesful block with missing field"}); 
  })

  test('invalid input type',async () => {
    expect(await  blockFacility(client,"Help!Db", "@Y(E#&H",1)).toEqual({"result": "unsuccesful block with invalid type"}); 
  })

  test('invalid input id',async () => {
    expect(await  blockFacility(client,"Help!Db", "entertainments","112e31231")).toEqual({"report_content": null}); 
  })
  const TestBlockResult = { "_id" : 1,
                            "facility" : {
                                    "facility_status" : "normal",
                                    "facilityType" : "entertainments",
                                    "facilityTitle" : "AMS Student Nest",
                                    "facilityDescription" : "The AMS Student Nest is a campus hub for students to eat, shop, socialize and study.",
                                    "timeAdded" : "2022/07/06",
                                    "facilityImageLink" : "https://cdn.discordapp.com/attachments/984213736652935230/994306235526557746/unknown.png",
                                    "facilityOverallRate" : 4,
                                    "numberOfRates" : 2,
                                    "longitude" : -123.25,
                                    "latitude" : 49.2664
                            },
                            "ratedUser" : [
                                    {
                                            "replierID" : "l2542293790@gmail.com"
                                    },
                                    {
                                            "replierID" : "xyjyeducation@gmail.com"
                                    }
                            ],
                            "reviews" : [
                                    {
                                            "replierID" : "l2542293790@gmail.com",
                                            "userName" : "Linxin Li",
                                            "rateScore" : 3,
                                            "upVotes" : 0,
                                            "downVotes" : 0,
                                            "replyContent" : "a",
                                            "timeOfReply" : "2022/6/18/23/56/38"
                                    },
                                    {
                                            "replierID" : "xyjyeducation@gmail.com",
                                            "userName" : "Wilson Wang",
                                            "rateScore" : 5,
                                            "upVotes" : 0,
                                            "downVotes" : 0,
                                            "replyContent" : "Best!",
                                            "timeOfReply" : "2022/6/19/6/52/58"
                                    }
                            ],
                            "adderID" : ""}
  test('block success',async () => {
    expect(await  blockFacility(client,"Help!Db", "entertainments",1)).toEqual(
        {report_content:TestBlockResult}
    ); 
  })   
})


// //test 5 --> interface insertFacility
// //(client,type, newId, title, description, facilityImageLink , timeAdded , long, lat, adderId)
describe('testing insert facility interface', () => {
  test('missing field',async () => {
    expect(await  addFacility(client)).toEqual({"result":"unsuccesful add with missing field"}); 
  })

  test('invalid input',async () => {
    expect(await  addFacility(client,"@#$#$@#$", 13, "Added title", 
    "added description", "added image link" , "added time" , 123,"wrong field placement", "adder id")).toEqual({"result":"unsuccesful add with invalid input"}); 
  })

  //uncomment this later beacuse every time it adds there will be a new object in db
  // test('successful add',async () => {
  //   expect(await  addFacility(client,"entertainments", 13, "Added title", 
  //   "added description", "added image link" , "added time" , 123,-321, "l2542293790@gmail.com")).
  //   toEqual({
  //       _id: 13,
  //       "facility":
  //       {
  //           "facilityType": "entertainments",
  //           "facility_status": "normal",
  //           "facilityTitle": "Added title",
  //           "facilityDescription":  "added description",
  //           "facilityImageLink":  "added image link",
  //           "facilityOverallRate": 0,
  //           "numberOfRates": 0,
  //           "timeAdded": "added time",
  //           "longitude": 123,
  //           "latitude": -321
  //       },
  //       "ratedUser": [],
  //       "reviews": [],
  //       "adderID": "l2542293790@gmail.com"

  //   }); 
  // })
})

//test 6 --> interface reportFacility
//(client, reportedFacilityType, reportedFacilityID, myDb, reportReason,  reporterID,
// myCollection, reportType, reportedUSer, reportFacilityTitle, reportUserCond, reportedFacilityTypeString)
describe('testing report facility interface', () => {
  test('missing field',async () => {
    expect(await  reportFacility(client)).toEqual({"result":"unsuccesful report with missing field"}); 
  })

  test('inavlid input',async () => {
    expect(await  reportFacility(client, "@(*Y#98ywronginput", "+S+{+SW+W9889yw7}wronginput", 
      "reason",  
      "user@gmail", "anytype", "user2@gmail.com", "title", 1, "*W@U*#(2wronginput")).toEqual({"result":"unsuccesful report with invalid input"}); 
  })

  // test('report successful',async () => {
  //   expect(await  reportFacility(client, "entertainments", 1, 
  //     "reason",  
  //     "user@gmail", "anytype", "user2@gmail.com", "title", 1, "entertainments")).
  //   toEqual({ "_id": "62ecba07401bbb55078de9e7","facility_id": 1,
  //       "facility_type": "entertainments",
  //       "reason": "reason",
  //       "reportUserStatus": 1,
  //       "report_type": "anytype",
  //       "reported_user": "user2@gmail.com",
  //      "reporter": "user@gmail",
  //       "title": "title",
  //      "reportUserStatus": 1}); 
  // })
})


afterAll((done) => {
  done();
});

