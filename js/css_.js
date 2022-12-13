let cssData = [
	{
		
		"padding":[
			{
				"padding": "20px 20px 20px 20px",
				"padding-top": "10px",
				"padding-right":"10px",
				"padding-bottom":"10px",
				"padding-left":"10px",
			},
			
			{
				"htmlView":`
							<p class='code-mirror'>
								<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
								<span class='fb-cn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,</span>
								<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
							</p>`,
				"htmlDOM":
						`<div id='padding-demo' class='demo-tags padding-demo'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,
						</div>`	
			}

			
		],
		"border":[
			{
				"border": "5px predefind-style red",
				"border-width": "2px",
				"border-style":"predefind-style",
				"border-color":"green",
				"border-top-style": "predefind-style",
				"border-right-style": "predefind-style",
				"border-bottom-style": "predefind-style",
				"border-left-style": "predefind-style",
				"predefind-style":["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "none", "hidden"]
			},
			
			{
				"htmlView":`
						<p class='code-mirror'>
							<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
							<span class='fb-cn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,</span>
							<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
						</p>`,
				"htmlDOM":
						`<div id="border-demo" class="demo-tags border-demo">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,
						</div>`	
			}
			
		],
		"margin":[
			{
				"margin": "20px 20px 20px 20px",
				"margin-top": "10px",
				"margin-right":"10px",
				"margin-bottom":"10px",
				"margin-left":"10px",
			},
			
			{
				"htmlView":`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
				"htmlDOM":
						`<div id="margin-demo" class="demo-tags margin-demo">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, magna tristique finibus viverra, orci orci semper risus, at sagittis mauris justo a nibh. Sed et pellentesque magna. Suspendisse lacus nisi, pharetra sed porta sit amet, mattis a risus. Curabitur ipsum risus,
						</div>`	
			}
			
		],
		"list-style":[
			{
				"list-style": "predefind-type predefind-position url('images/sqicon.gif')",
				"list-style-type": "predefind-type",
				"list-style-position":"predefind-position",
				"list-style-image":"url('images/sqicon.gif')",
				"predefind-type":["circle", "square", "decimal", "disc", "disclosure-closed", "disclosure-open", "initial", "inherit", "upper-roman", "lower-alpha", "none"],
				"predefind-position":["inside", "outside"]
			
			},
			{
				"htmlView":`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>ul</span><span class='fb-tag fb-bracket'>></span>
						<br/>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>li</span><span class='fb-tag fb-bracket'>></span>Apple<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/li</span><span class='fb-tag fb-bracket'>></span><br/>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>li</span><span class='fb-tag fb-bracket'>></span>Orange<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/li</span><span class='fb-tag fb-bracket'>></span><br/>
						<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>li</span><span class='fb-tag fb-bracket'>></span>Lemon<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/li</span><span class='fb-tag fb-bracket'>></span><br/>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/ul</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
				"htmlDOM":
						`<ul id="list-style-demo" class="demo-tags list-style-demo">
							<li>Apple</li>
							<li>Orange</li>
							<li>Lemon</li>
						</ul>`	
			}
			
		],
		"background":[
			{
				"background-color":"lightgray",
				"background-image":"url('images/bg.jpg')",
				"background-position":"left top",
				"background-position-x":"left",
				"background-position-y":"bottom",
				"background-size":"cover",
				"background-repeat":"predefind-repeat",				
				"background-origin":"padding-box",
				"background-clip":"border-box",
				"background-attachment":"predefind-attachment",
				"background-blend-mode":"lighten",
				"predefind-repeat":["repeat", "no-repeat", "repeat-x", "repeat-y"],
				"predefind-attachment":["fixed", "scroll"]
			},
			{
				"htmlView":`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>div</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>background</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/div</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
				"htmlDOM":`<div id="background-demo" class="demo-tags background-demo"></div>`	
			}
		],
		"text-alignment":[
			{
				"color":"red",
				"text-align":"predefind-h-align",
				"text-align-last":"predefind-h-align",
			    "direction":"rtl",
				"unicode-bidi":"bidi-override",
				// "vertical-align":"predefind-v-align",
				"predefind-h-align":["left", "center", "right", "justify"],
				"predefind-v-align":["baseline", "text-top", "text-bottom", "sub", "super"]
			},
			{
				"htmlView":`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>p</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Sed sit amet nunc sit amet nulla auctor congue a ac odio. Suspendisse potenti. Aenean sollicitudin nisl tincidunt, iaculis urna sed, dignissim dui. Sed id hendrerit neque. Mauris at sodales velit. Pellentesque porta et justo vel vehicula. Vivamus viverra libero mollis lobortis tempor. Nullam pulvinar at justo quis imperdiet. Aliquam sed aliquet tortor. Sed convallis ex posuere ligula ullamcorper, sit amet malesuada lacus lacinia. Proin viverra viverra sapien, a interdum lacus bibendum eget.</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/p</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
				"htmlDOM":`<p id="text-alignment-demo" class="demo-tags text-alignment-demo">Sed sit amet nunc sit amet nulla auctor congue a ac odio. Suspendisse potenti. Aenean sollicitudin nisl tincidunt, iaculis urna sed, dignissim dui. Sed id hendrerit neque. Mauris at sodales velit. Pellentesque porta et justo vel vehicula. Vivamus viverra libero mollis lobortis tempor. Nullam pulvinar at justo quis imperdiet. Aliquam sed aliquet tortor. Sed convallis ex posuere ligula ullamcorper, sit amet malesuada lacus lacinia. Proin viverra viverra sapien, a interdum lacus bibendum eget.</p>`
			
			}
		],
		"text-decoration":[
			{
				"text-decoration-line":"predefind-d-line",
				"text-decoration-color":"red",
				"text-decoration-style":"predefind-d-style",
				"text-decoration-thickness":"5px",
				"text-decoration":"predefind-d-line red predefind-d-style 5px",
				"predefind-d-line":["overline", "line-through", "underline", "overline underline", "none"],
				"predefind-d-style":["solid", "double", "dotted", "dashed", "wavy"]

			},
			{
				"htmlView":`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>h3</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Css Text Decoration</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/h3</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
				"htmlDOM":`<h3 id="text-decoration-demo" class="demo-tags text-decoration-demo">Css Text Decoration</h3>`

			}
		],
		"text-transform":[
			{
				"text-transform":"predefind-text-transform",
				"predefind-text-transform":["uppercase", "lowercase", "capitalize"]
			},
			{
				"htmlView":`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>h3</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Css Text transform</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/h3</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
				"htmlDOM":`<h3 id="text-transform-demo" class="demo-tags text-transform-demo">Css text transform</h3>`

			}
		],
		"text-spacing":[
			{
				"text-indent":"50px",
				"letter-spacing":"5px",
				"line-height":"1.8",
				"word-spacing":"10px",
				"white-space":"predefind-white-space",
				"predefind-white-space":["nowrap", "normal", "pre"]
			},
			{
				"htmlView":`
				<p class='code-mirror'>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>p</span><span class='fb-tag fb-bracket'>></span>
					<span class='fb-cn'>Sed sit amet nunc sit amet nulla auctor congue a ac odio. Suspendisse potenti. Aenean sollicitudin nisl tincidunt, iaculis urna sed, dignissim dui. Sed id hendrerit neque. Mauris at sodales velit. Pellentesque porta et justo vel vehicula. Vivamus viverra libero mollis lobortis tempor. Nullam pulvinar at justo quis imperdiet. Aliquam sed aliquet tortor. Sed convallis ex posuere ligula ullamcorper, sit amet malesuada lacus lacinia. Proin viverra viverra sapien, a interdum lacus bibendum eget.</span>
					<span class='fb-tag fb-bracket'><</span><span class='fb-tag'>/p</span><span class='fb-tag fb-bracket'>></span>
				</p>`,
				"htmlDOM":`<p id="text-spacing-demo" class="demo-tags text-spacing-demo">Sed sit amet nunc sit amet nulla auctor congue a ac odio. Suspendisse potenti. Aenean sollicitudin nisl tincidunt, iaculis urna sed, dignissim dui. Sed id hendrerit neque. Mauris at sodales velit. Pellentesque porta et justo vel vehicula. Vivamus viverra libero mollis lobortis tempor. Nullam pulvinar at justo quis imperdiet. Aliquam sed aliquet tortor. Sed convallis ex posuere ligula ullamcorper, sit amet malesuada lacus lacinia. Proin viverra viverra sapien, a interdum lacus bibendum eget.</p>`
			
			}
		]

	}
]