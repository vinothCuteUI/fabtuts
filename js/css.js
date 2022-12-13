let cssData = [
	{
			cssItems:"padding", 
			property:
			{
				padding: "20px 20px 20px 20px",
				paddingTop: "10px",
				paddingRight:"10px",
				paddingBottom:"10px",
				paddingLeft:"10px",
			},
			htmlView:`
					<p class='code-mirror'>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
						<span class='fb-cn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,</span>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
					</p>`,
			htmlDOM:
					`<div id='padding-demo' class='demo-tags padding-demo'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,
					</div>`	
			
			
	},
	{
		cssItems:"border", 
		property:
		{
			border: "5px predefindStyle red",
			borderWidth: "2px",
			borderStyle:"predefindStyle",
			borderColor:"green",
			borderTopStyle: "predefindStyle",
			borderRightStyle: "predefindStyle",
			borderBottomStyle: "predefindStyle",
			borderLeftStyle: "predefindStyle"
		},
		preDefind:
		{
			predefindStyle:["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "none", "hidden"]
		},
		
		htmlView:`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
		htmlDOM:
				`<div id="border-demo" class="demo-tags border-demo">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,
					</div>`	
		
			
	},
	{
		cssItems:"margin", 
		property:
		{
			margin: "20px 20px 20px 20px",
			marginTop: "10px",
			marginRight:"10px",
			marginBottom:"10px",
			marginLeft:"10px",
		},

		htmlView:
				`<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
		htmlDOM:
				`<div id="margin-demo" class="demo-tags margin-demo">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,
				</div>`	
		
			
	},
	{
		cssItems:"listStyle", 
		property:
		{
				listStyle: "predefindType predefindPosition url('images/sqicon.gif')",
				listStyleType: "predefindType",
				listStylePosition: "predefindPosition",
				listStyleImage: "url('images/sqicon.gif')",
		},
		preDefind:
		{
			predefindType:["circle", "square", "decimal", "disc", "disclosure-closed", "disclosure-open", "initial", "inherit", "upper-roman", "lower-alpha", "none"],
			predefindPosition:["inside", "outside"]
		},
		htmlView:
				`<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>ul</span><span class='fb-tag fb-bracket'>></span>
						<br/>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>li</span><span class='fb-tag fb-bracket'>></span>Apple<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/li</span><span class='fb-tag fb-bracket'>></span><br/>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>li</span><span class='fb-tag fb-bracket'>></span>Orange<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/li</span><span class='fb-tag fb-bracket'>></span><br/>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>li</span><span class='fb-tag fb-bracket'>></span>Lemon<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/li</span><span class='fb-tag fb-bracket'>></span><br/>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/ul</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
		htmlDOM:
				`<ul id="listStyle-demo" class="demo-tags list-style-demo">
					<li>Apple</li>
					<li>Orange</li>
					<li>Lemon</li>
				</ul>`
		
	},
	{
		cssItems:"background", 
		property:
		{
			background:"#ffffff url('images/course-1.jpg') no-repeat right top",
			backgroundColor:"lightgray",
			backgroundImage:"url('images/bg.jpg')",
			backgroundPosition:"left top",
			backgroundPositionX:"left",
			backgroundPositionY:"bottom",
			backgroundSize:"cover",
			backgroundRepeat:"predefindRepeat",				
			backgroundAttachment:"predefindAttachment",
			
			
		},
		preDefind:
		{
			predefindRepeat:["repeat", "no-repeat", "repeat-x", "repeat-y"],
			predefindAttachment:["fixed", "scroll"]
		},
		htmlView:
				`<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>background</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
		htmlDOM:`<div id="background-demo" class="demo-tags background-demo"></div>`
		
	},
]