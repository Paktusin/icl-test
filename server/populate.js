const connect = require("./db");
const { Post } = require("./schemas/Post");
const { User } = require("./schemas/User");

function randomEl() {
  return this[Math.floor(Math.random() * this.length)];
}
Array.prototype.random = randomEl;

const images = [
  "https://www.icl-group.com/wp-content/uploads/2022/10/vic-in-spain-002-1-584x355.jpg",
  "https://www.icl-group.com/wp-content/uploads/2022/09/shutterstock_2071904225-584x355.jpg",
  "https://www.icl-group.com/wp-content/uploads/2022/10/shutterstock_515469298-scaled-e1665678137240-584x355.jpg",
  "https://www.icl-group.com/wp-content/uploads/2022/08/28738_68198_ICL_CaremagD_master_1565X663_1-366x216.jpg",
];

async function exec() {
  const types = require("./schemas/Types").Types;
  const regions = require("./schemas/Regions").Regions;
  await connect();
  const users = await User.find();
  await Post.insertMany(
    Array(1000)
      .fill(null)
      .map(() => ({
        img: images.random(),
        from: users.random().toObject(),
        title: "What are Completion Fluids?",
        type: types.random(),
        region: regions.random(),
        text: `The oil and gas industries play a vital role in keeping the world’s economies running. The demand for energy continues to increase year after year, and still gas and oil are the primary sources of energy. Even though renewable energy sources are making inroads into the world’s vast energy demands, the demand for fossil fuels is still considerable. 

    Clear Brine Fluids (CBFs) or completion fluids play a vital role in oil and gas exploration, drilling, and production.  
    
    What are Completion Fluids?
    Clear brine or completion fluids are high-density and solid-free brines, used mainly in the completion process of offshore oil and gas drilling industries because of their unique physical properties. They enable the safe installation of high-tech completion systems that ultimately lead to higher production and overall higher recovery rates from oil and gas wells
    
    ICL is a global leader in the manufacture of completion fluids which are among several novel or engineered materials in their portfolio.
    
    The Importance and Uses of Completion Fluids for Oil and Gas Drilling
    The process of oil and gas drilling involves dealing with enormous wellbore pressures. Completion fluids serve many vital functions.
    
    During the drilling process, it’s important to prevent extraneous liquids from entering the borehole and remove the debris caused by the drill itself.
    
    These extraneous fluids or “formation fluids” occur in the substrate being drilled and are composed of naturally occurring fluids like hydrocarbons, saline or fresh water, and gases like carbon dioxide or even hydrogen sulfide depending upon the type of drilling or exploration being undertaken.
    
    These fluids would naturally migrate to the bore of the well and together with the debris the drill creates, would impede the process.
    
    Completion fluids are essentially highly saturated salt solutions and are pumped into the borehole as the drilling takes place.
    
    Because of their high density created by dissolved salts, completion fluids exert outward pressure on their surroundings. This is known as hydrostatic pressure. Because they are so dense, they tend to “push” less dense fluids like oils or fresh or seawater away. In the context of well-drilling, they prevent these less dense or formation fluids from entering the bore shaft.
    
    In addition to their hydrostatic pressure properties, they also serve to cool the drill bit which heats up due to friction.
    
    They serve as a transport medium to move the debris or cuttings out of the bore well and to keep the drill cuttings in suspension while drilling is put on hold at any point.
    
    In addition, they can control pH and protect the completion interval which is where the oil or gas will eventually be taken from.
    
    In a nutshell, clear brine fluids are used because they increase safety, productivity, and efficiency.
    
    These brines are also known as drilling completion fluids because they are pumped into the wells at the “completion” of the drilling process.
    
    Our brines are used both in terrestrial and deep water exploration and extraction and are recyclable and reusable which means they are a sustainable resource too. 
    
    Bromine is a major component of well-completion fluids while other chemicals include potassium chloride (KCl). KCl is also used to improve wellbore stability. It does this by helping clay and shale form a more stable complex and not collapse into the bore of the well.`,
      }))
  );
}

exec().then(() => {
  console.log("done");
});
