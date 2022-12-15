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
			borderLeftStyle: "predefindStyle",
			borderTopColor:"red",
			borderRightColor:"green",
			borderBottomColor:"blue",
			borderLeftColor:"orange"
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
	{
		cssItems:"textAlignment", 
		property:
		{
			color:"red",
			textAlign:"predefindHAlign",
		    direction:"predefindDirection",
			unicodeBidi:"predefindBidiOverride",
			textTransform:"predefindTextTransform"
		},
		preDefind:
		{
			predefindHAlign:["left", "center", "right", "justify"],
			predefindTextTransform:["uppercase", "lowercase", "capitalize"],
			predefindBidiOverride:["bidi-override"],
			predefindDirection:["ltr", "rtl", "inherit", "initial", "revert", "revert-layer", "unset"]
		},
		htmlView:
				`<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>p</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Sed sit amet nunc sit amet nulla auctor congue a ac odio. Suspendisse potenti. Aenean sollicitudin nisl tincidunt, iaculis urna sed, dignissim dui. Sed id hendrerit neque. Mauris at sodales velit. Pellentesque porta et justo vel vehicula. Vivamus viverra libero mollis lobortis tempor. Nullam pulvinar at justo quis imperdiet. Aliquam sed aliquet tortor. Sed convallis ex posuere ligula ullamcorper, sit amet malesuada lacus lacinia. Proin viverra viverra sapien, a interdum lacus bibendum eget.</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/p</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
		htmlDOM:`<p id="textAlignment-demo" class="demo-tags text-alignment-demo">Sed sit amet nunc sit amet nulla auctor congue a ac odio. 
		Suspendisse potenti. Aenean sollicitudin nisl tincidunt, iaculis urna sed, dignissim dui. Sed id hendrerit neque. Mauris at sodales velit. 
		Pellentesque porta et justo vel vehicula. Vivamus viverra libero mollis lobortis tempor. Nullam pulvinar at justo quis imperdiet.</p>`
		
	},
	{
		cssItems:"textDecoration", 
		property:
		{
			textDecorationLine:"predefindDLine",
			textDecorationColor:"red",
		    textDecorationStyle:"predefindDStyle",
			textDecorationThickness:"5px",
			textDecoration:"predefindDLine red predefindDStyle 5px"
		},
		preDefind:
		{
			predefindDLine:["overline", "line-through", "underline", "overline underline", "none"],
			predefindDStyle:["solid", "double", "dotted", "dashed", "wavy"]
		},
		htmlView:
				`<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>h3</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Css Text Decoration</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/h3</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
		htmlDOM:`<h3 id="textDecoration-demo" class="demo-tags text-decoration-demo">Css Text Decoration</h3>`
		
	},
	
]