var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port=process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let data=[
    {
            prodCode:	"DS2S245",
            category:	"Dining",
            desc:	[
                    "Two	seater	Dining	Set",
                    "Built	from	High	quality	wood",
                    "1	year	warranty"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/41/8273/40342/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
            ingredients:	[
                    {	ingName:	"Dining	Table",	qty:	1	},
                    {	ingName:	"Chair",	qty:	2	}
            ],
            title:	"Two	seater	Dining	Set"
    },
    {
            prodCode:	"DS6S761",
            category:	"Dining",
            desc:	[
                    "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
                    "Assembly	by	Skilled	Carpenters",
                    "Made	from	Teak	wood"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/21/8273/56627/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
            ingredients:	[
                    {	ingName:	"Dining	Table",	qty:	1	},
                    {	ingName:	"Chair",	qty:	4	},
                    {	ingName:	"Bench",	qty:	1	}
            ],
            title:	"Six	Seater	Dining	Set"
    },
    {
            prodCode:	"DS4S177",
            category:	"Dining",
            desc:	[
                    "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
                    "Knock-down	construction	for	easy	transportation"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/00/0553/76430/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
            ingredients:	[
                    {	ingName:	"Dining	Table",	qty:	1	},
                    {	ingName:	"Chair",	qty:	4	}
            ],
            title:	"Mild	Steel	Dining	Set"
    },
    {
            prodCode:	"DC2S705",
            category:	"Dining",
            desc:	[
                    "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
                    "Beautiful	design	carved	on	dining	chair",
                    "Dining	chair	seat	upholstered	in	dark	brown	Fabric"	],
                    img:
                            "https://hometown.gumlet.io/media/product/71/3453/65618/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
                    ingredients:	[{	ingName:	"Chair",	qty:	2	}],
                    title:	"Dining	Chair	Set"
            },
            {
                    prodCode:	"BN1S388",
                    category:	"Dining",
                    desc:	[
                            "Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
                            "Comfortable	bench	for	a	relaxed	dinner"
                    ],
                    img:
                            "https://hometown.gumlet.io/media/product/84/3673/49894/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
                    ingredients:	[{	ingName:	"Bench",	qty:	1	}],
                    title:	"Dining	Bench"
            },
            {
                    prodCode:	"SF2S532",
                    category:	"Drawing",
                    desc:	[
                            "Characteristic	Rising	Track	Arm	Rest	Design",
                            "Premium	High	Gloss	Leatherette	Upholstery",
                            "Independent	Headrest	And	Lumber	Support"
                    ],
                    img:
                            "https://hometown.gumlet.io/media/product/58/9153/75904/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
                    ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
                    title:	"Two	Seater	Sofa"
            },
            {
                    prodCode:	"SF2S206",
                    category:	"Drawing",
                    desc:	["Two	Seater	Sofa	in	Blue	Colour",	"Assembly	by	Skilled	Carpenters"],
                    img:
                            "https://hometown.gumlet.io/media/product/46/9553/76973/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
                    ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
                    title:	"Two	Seater	Sofa"
            },
            {
                    prodCode:	"SFBD311",
                    category:	"Drawing",
                    desc:	[
                            "Sofa	Cum	bed	in	Brown	Colour",
                            "Ply-wood	construction	with	hand	polished	finish",
                            "Removable	fabric	cover	on	best	quality	foam	mattress",
                            "Throw	cushions	and	bolsters	come	with	the	product"
                    ],
                    img:
                            "https://hometown.gumlet.io/media/product/35/2853/25455/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
                    ingredients:	[{	ingName:	"Sofa",	qty:	1	},	{	ingName:	"Cushions",	qty:	2	}],
                    title:	"Sofa	cum	Bed"
            },
            {
                    prodCode:	"BDQS381",
                    category:	"Bedroom",desc:	[
						"Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
						"Box	Storage	included	for	Maximum	space	utilization",
						"Mattress	is	included"
				],
				img:
						"https://hometown.gumlet.io/media/product/63/1073/79527/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
				ingredients:	[{	ingName:	"Bed",	qty:	1	},	{	ingName:	"Mattress",	qty:	2	}],
				title:	"King	size	Bed"
		},
		{
				prodCode:	"BDQS229",
				category:	"Bedroom",
				desc:	[
						"Wood	Hydraulic	Storage	Queen	Size	Bed",
						"Half	hydraulic	storage",
						"Superior	E2	grade	MDF	used	with	melamine	finish"
				],
				img:
						"https://hometown.gumlet.io/media/product/01/5763/52147/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
				ingredients:	[{	ingName:	"Bed",	qty:	1	}],
				title:	"Queen	size	Bed"
		},
		{
				prodCode:	"ST1T425",
				category:	"Study",
				desc:	[
						"Wood	Study	Table	in	Walnut	Colour",
						"Assembly	by	Skilled	Carpenters",
						"Built	from	High	Quality	Wood"
				],
				img:
					"https://hometown.gumlet.io/media/product/12/9153/90938/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
				ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
				title:	"Study	Table"
		},
		{
				prodCode:	"ST1T588",
				category:	"Study",
				desc:	[
						"	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
						"Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
						"Superior	quality	MDF	with	stain	resistant	melamine	finish"
				],
				img:
						"https://hometown.gumlet.io/media/product/02/9153/44662/1.jpg?mode=fill&w=134&h=134&dpr=1.3",
				ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
				title:	"Study	Table"
		}
]
let user=[{email:"test1@gmail.com",password:"test11234",role:"customer"},{email:"test2@gmail.com",password:"test21234",role:"admin"}]
let cart=[]
app.get("/product",function(req,res){
    res.send(data)
})

app.post("/login",function(req,res){
        let {email,password} = req.body
        let cust = user.find((item) =>  item.email==email && item.password==password);
        res.send(cust);
});

app.post("/cart",function(req,res){
        let body=req.body
        let {title,desc=[],img,ingredients=[],prodCode,category}=body
        body.qty=1
        let i=0
        cart.map((pr)=>  pr.prodCode==prodCode?i=1:"")
        if(i==0)
          cart.push(body)
        res.send(cart)
})
app.get("/product1/cart",function(req,res){
        res.send(cart)
})
app.put("/putData",function(req,res){
    let body=req.body 
    let index=cart.findIndex((pr)=> pr.img==body.img)
    if(body.qty==0)
       cart.splice(index,1)
    else
       cart[index]=body 
      
    res.send(body)
})

app.post("/newproduct",function(req,res){
        let body=req.body;
        data.push(body)
        res.send(body)
})

app.get("/edit1/:code",function(req,res){
    let code=req.params.code 
    let data1=data.find((pr)=> pr.prodCode==code)
    res.send(data1)
})
app.delete("/delete/:code",function(req,res){
        let {code}=req.params
        let index=data.findIndex((tr)=> tr.prodCode==code)
        let data1=data.splice(index,1)
        res.send(data1)
})


app.put("/Editproduct",function(req,res){
        let body=req.body
        let index=data.findIndex((pr)=>pr.prodCode==body.prodCode)
        data[index]=body
        res.send(body)
})