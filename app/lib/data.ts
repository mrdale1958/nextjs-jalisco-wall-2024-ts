import configData from '@/app/lib/ConfigData.json'
const csv = require('csvtojson');

export async function Config() {
   let config: any = configData[0]
   config.yearLaneWidth = 100; //window.innerWidth/20;

   config.lastYear = config.startYear;
   //config.availableClicks = config.clickDensity * config.travelDistance; // 39863
   config.printedGraphicScaleX = (config.printedGraphicWidth -config.screenWidth - config.offset_right - config.offset_left) / config.maxClicks  ;
   config.episodePitch = (config.availableClicks - config.offset_right/2) / config.episode_count;
   //config.maxClicks = (config.endYear - config.startYear) * config.ticksPerYear;
   config.rightEdge = 1000; //window.innerWidth - config.yearLaneWidth - 100;  // why was this soooo off?
   //config.leftEdge = 0 + config.labelWidth;
   //config.rightEdge = config.screenWidth - config.labelWidth; 
   config.leftEdge = 0;
   config.rightEdge = config.screenWidth; 
   config.leftSideSlope = 2/config.screenWidth;
   config.rightSideSlope = -2/config.screenWidth;
   config.episode_width = (config.availableClicks + config.screenWidth - 
                              (config.offset_left + config.offset_right)) / 
                              (config.episode_count);
   let fauxPhidgetConfig = {
     running : false,
     slideIncrement : 20,
     direction : 1,
     moveTime : 100 // milliseconds
   }
   config.fauxPhidgetConfig = fauxPhidgetConfig;
   return config;
}

export async function SliderPosition(){
   return 0
}

export  async function Timeline(){ 
   const csvFilePath = './app/lib/JaliscoWallData.tsv'
   return await csv( {
   delimiter:["\t"],
})
 .fromFile(csvFilePath)
 .then((jsonEventsObj: any) => {
    //console.log(jsonEventsObj) // will print
    /**
     * [
     *  {name:"CHOne", description: "First Change"},
     *  {name:"CHTwo", description: "Second Change"}
     * ]
     */

     // now you can run one test for each user's object
    for (const { name } of jsonEventsObj) {
        //console.log(`testing with ${name}`, async () => {
         // ...
       //});
     
    }
    return jsonEventsObj;
})
//.on('header', (header=>{}))

.catch((error: any) => {console.log(csvFilePath, error)})
}
