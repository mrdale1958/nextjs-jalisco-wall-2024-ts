import Episode from '@/app/lib/TimelineObjects/Episode.js';


export default function Category(){
    function categoryToClassname(category) {
        let retVal = category.replace(/[ /]/g, "_").toLowerCase();
        //console.log(category,retVal);
        return retVal;
    }
       
    function buildDivs(database, position) {
        const categoryDiv = database.map((event,index) =>
        <Episode key = {this.props.id + index}
                    position = {Number(event.TickPosInInches) * this.props.configData.clickDensity} 
                    eventData = { event }
                    mode = {this.props.eventDisplayMode}
                    configData={this.props.configData}/>
        );
        
        return( categoryDiv );
    }
    
    
let sortedData = this.props.categoryEvents;
let divs = buildDivs(sortedData, this.props.sliderPosition)
return (
            <div className={'category-block ' + categoryToClassname(this.props.id) + '_top'} id = {this.props.id}>
            {divs}
            </div>
        );
}


