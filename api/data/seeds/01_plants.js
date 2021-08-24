const plants = [
{species:'Saintpaulia Ionantha',
nickname:'African Violet',
h2oFrequency:'Keep the soil evenly moist but not wet, Sitting in water can cause rot. Allow to moderately dry between the waterings, But it shouldn’t dry completely.',
origins:'Eastern Tropical Africa'},




{ species:'Spathiphyllum cochlearispathum',
nickname:'Peace Lily',
h2oFrequency:'Water only as often as the top layer of soil dries out. When you water the plant, you should thoroughly irrigate the potting soil, During the growing season and hot weather, you will need to water your plant about once or twice a week. In winter, when growth slows down, water less frequently, maybe every two weeks or less.',
origins:'Southern Mexicos',
},




{species:'Kalanchoe blossfeldiana',
nickname:'flaming katy, Christmas kalanchoe',
h2oFrequency:'Water a kalanchoe plant as often as the soil dries out. In hot weather, you may have to water a kalanchoe as frequently as every week. In the fall and winter, only water your kalanchoe succulent every six to eight weeks. However, let soil dryness be your guide when to water your kalanchoe. Watering less often is better than watering too frequently.',
origins:'Madagascar'},




{species:'Hibiscus rosa-sinensis',
nickname:'rose mallow, Chinese hibiscus',
h2oFrequency:'Tropical hibiscus is a thirsty plant and will thrive and produce blossoms only if it is given enough water. Depending on the heat, wind, and humidity in your environment, your plant may need to be watered daily, or even twice a day in extremely dry conditions.',
origins:'Tropical Asia'},





{species:'Aechmea fasciata ',
nickname:'silver vase, urn plant',
h2oFrequency:'Aechmea fasciata requires small amount of watering. Better purified or rain water. Put the water in the middle of the rosette leaves. The soil must be well ventilated and well-drained.',
origins:'Brazil'},





{species:'Lilium bulbiferum',
nickname:'Fire Lily, Tiger Lily',
h2oFrequency:'should be lightly watered for the first six to eight weeks, after that you can increase the watering to a more moderate level but don’t want them to be saturated constantly. Highly Toxic to cats',
origins:'Europe'},
]




exports.plants = plants
exports.seed = function(knex) {
  return knex('plants').insert(plants)
};
