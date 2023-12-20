var courseIncart=[
    {
        name: "javascript",
    },
    {
        name:"c",
    },
    {
        name:"java"
    }
];

courseIncart.forEach((item,index,array)=>{
    console.log(`name: ${item.name}\nposition:${index}\n `);
})