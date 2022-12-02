let cssContents = [
	{
		"padding":`
			<h1>CSS Padding</h1>
			<p>The CSS <span class="fb-props-color">padding</span> properties are used to generate space around an element's content, inside of any defined borders.</p>
			<p>With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
			<a href="#" class='btns tryit '>Try it yourself</a>
			<hr>
			<h2>Padding - Individual Sides</h2>
			<p>CSS has properties for specifying the padding for each side of an element:</p>
			<ul>
				<li><span class="fb-props-color">padding-top</span></li>
				<li><span class="fb-props-color">padding-right</span></li>
				<li><span class="fb-props-color">padding-bottom</span></li>
				<li><span class="fb-props-color">padding-left</span></li>
			</ul>

			<p>All the <span class="fb-props-color">padding</span> properties can have the following values:</p>
			<ul>
				<li>length - specifies a padding in px, pt, cm, etc.</li>
				<li>% - specifies a padding in % of the width of the containing element</li>
				<li>inherit - specifies that the padding should be inherited from the parent element</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;padding-top<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 50px<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
								&nbsp;&nbsp;padding-right<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 30px<span class="css-delimitercolor" style="color:black">;</span>
								</span><br>
								&nbsp;&nbsp;padding-bottom<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 50px<span class="css-delimitercolor" style="color:black">;</span>
								</span><br>
								&nbsp;&nbsp;padding-left<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 80px<span class="css-delimitercolor" style="color:black">;</span>
								</span><br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			
			<hr>
			<h2>Padding - Shorthand Property</h2>
			<p>To shorten the code, it is possible to specify all the padding properties in one property.</p>
			<p>The <span class="fb-props-color">padding</span> property is a shorthand property for the following individual padding properties:</p>
			<ul>
				<li><span class="fb-props-color">padding-top</span></li>
				<li><span class="fb-props-color">padding-right</span></li>
				<li><span class="fb-props-color">padding-bottom</span></li>
				<li><span class="fb-props-color">padding-left</span></li>
			</ul>
			<p>So, here is how it works:</p>
			<p>If the <span class="fb-props-color">padding</span> property has four values:</p>
			<ul>
				<li>
					<strong>padding: 25px 50px 75px 100px;</strong>
		            <ul>
		            	<li>top padding is 25px</li>
		            	<li>right padding is 50px</li>
		            	<li>bottom padding is 75px</li>
		            	<li>left padding is 100px</li>
		            </ul>
				</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;padding<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px 75px 100px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<p>If the <span class="fb-props-color">padding</span> property has three values:</p>
			<ul>
				<li><strong>padding: 25px 50px 75px;</strong>
		            <ul>
		            	<li>top padding is 25px</li>
		            	<li>right and left paddings are 50px</li>
		            	<li>bottom padding is 75px</li>
		            </ul>
				</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;padding<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px 75px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<p>If the <span class="fb-props-color">padding</span> property has two values:</p>
			<ul>
				<li><strong>padding: 25px 50px;</strong>
		            <ul>
		            	<li>top and bottom paddings are 25px</li>
		            	<li>right and left paddings are 50px</li>
		            </ul>
				</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;padding<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<p>If the <span class="fb-props-color">padding</span> property has one value:</p>
			<ul>
				<li><strong>padding: 25px;</strong>
		            <ul>
		           	    <li>all four paddings are 25px</li>
		            </ul>
				</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;padding<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<hr>
			<h2>Padding and Element Width</h2>
			<p>The CSS <span class="fb-props-color">width</span> property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the box model).</p>
			<p>So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.</p>
			<p>To keep the width at 300px, no matter the amount of padding, you can use the <span class="fb-props-color">box-sizing</span> property. This causes the element to maintain its actual width; if you increase the padding, the available content space will decrease.</p>
			<hr>
			`,
		"border":`
			<h1>CSS Borders</h1>
			<p>The CSS <span class="fb-props-color">border</span>  properties allow you to specify the style, width, and color of an element's border.</p>
			<p>With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
			<a href="#" class='btns tryit '>Try it yourself</a>
			<hr>
			<h2>CSS Border Style</h2>
			<p>The <span class="fb-props-color">border-style</span> property specifies what kind of border to display.</p>
			<p>The following values are allowed:</p>
			<ul>
				<li><span class="fb-props-color">dotted</span> - dotted border</li>
				<li><span class="fb-props-color">dashed</span> - dashed border</li>
				<li><span class="fb-props-color">solid</span> - solid border</li>
				<li><span class="fb-props-color">solid</span> - solid border</li>
				<li><span class="fb-props-color">double</span> - double border</li>
				<li><span class="fb-props-color">groove</span> - 3D grooved border. The effect depends on the border-color value</li>
				<li><span class="fb-props-color">ridge</span> - 3D ridged border. The effect depends on the border-color value</li>
				<li><span class="fb-props-color">inset</span> - 3D inset border. The effect depends on the border-color value</li>
				<li><span class="fb-props-color">outset</span> - 3D outset border. The effect depends on the border-color value</li>
				<li><span class="fb-props-color">none </span> - no border</li>
				<li><span class="fb-props-color">hidden</span> - hidden bordere</li>
			</ul>
			<p>The <span class="fb-props-color">border-style</span> property can have from one to four values (for the top border, right border, bottom border, and the left border).</p>
			<hr>
			<h2>CSS Border Width</h2>
			<p>The <span class="fb-props-color">border-width</span> property specifies the width of the four borders.</p>
			<p>The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.</p>
			<hr>
			<h2>Specific Side Widths</h2>
			<p>The <span class="fb-props-color">border-width</span> property can have from one to four values (for the top border, right border, bottom border, and the left border):</p>
			<hr>

			<h2>CSS Border Color</h2>
			<p>The <span class="fb-props-color">border-color</span> property is used to set the color of the four borders.</p>
			<p>The color can be set by:</p>
			<ul>
				<li>name - specify a color name, like "red"</li>
				<li>HEX - specify a HEX value, like "#ff0000"</li>
				<li>RGB - specify a RGB value, like "rgb(255,0,0)"</li>
				<li>HSL - specify a HSL value, like "hsl(0, 100%, 50%)"</li>
				<li>transparent</li>
			</ul>
			<p><strong>Note:</strong> If border-color is not set, it inherits the color of the element.</p>

			<hr>
			<h2>Specific Side Colors</h2>
			<p>The <span class="fb-props-color">border-color</span> property can have from one to four values (for the top border, right border, bottom border, and the left border). </p>

			<hr>
			<h2>CSS Border - Individual Sides</h2>
			<p>From the examples on the previous pages, you have seen that it is possible to specify a different border for each side.</p>
			<p>In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left):</p>
			<p>So, here is how it works:</p>
			<p>If the <span class="fb-props-color">border-style</span> property has four values:</p>
			<ul>
				<li><strong>border-style: dotted solid double dashed;</strong>
				    <ul>
				    	<li>top border is dotted</li>
						<li>right border is solid</li>
						<li>bottom border is double</li>
						<li>left border is dashed</li>
				    </ul>
				</li>
			</ul>
			<p>If the <span class="fb-props-color">border-style</span> property has three values:</p>
			<ul>
				<li>
					<strong>border-style: dotted solid double;</strong>
					<ul>
						<li>top border is dotted</li>
						<li>right and left borders are solid</li>
						<li>bottom border is double</li>
					</ul>

				</li>
			</ul>
			<p>If the <span class="fb-props-color">border-style</span> property has two values:</p>
			<ul>
				<li>
					<strong>border-style: dotted solid;</strong>
		            <ul>
		            	<li>top and bottom borders are dotted</li>
		                <li>right and left borders are solid</li>
		            </ul>
				</li>
			</ul>
			<p>If the <span class="fb-props-color">border-style</span> property has one value:</p>
			<ul>
				<li><strong>border-style: dotted;</strong>
		            <ul>
		            	<li>all four borders are dotted</li>
		            </ul>
				</li>
			</ul>
			<hr>
			<h2>CSS Border - Shorthand Property</h2>
			<p>Like you saw in the previous page, there are many properties to consider when dealing with borders.</p>
			<p>To shorten the code, it is also possible to specify all the individual border properties in one property.</p>
			<p>The <span class="fb-props-color">border</span> property is a shorthand property for the following individual border properties:</p>
			<ul>
				<li><span class="fb-props-color">border-width</span></li>
		        <li><span class="fb-props-color">border-style</span> (required)</li>
		        <li><span class="fb-props-color">border-color</span></li>
			</ul>	
			<p>You can also specify all the individual border properties for just one side:</p>
		`,
		"margin":`
			<h1>CSS Margins</h1>
			<p>The CSS <span class="fb-props-color">margin</span> properties are used to create space around elements, outside of any defined borders.</p>
			<p>With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).</p>
			<a href="#" class='btns tryit '>Try it yourself</a>
			<hr>
			<h2>Margin - Individual Sides</h2>
			<p>CSS has properties for specifying the padding for each side of an element:</p>
			<ul>
				<li><span class="fb-props-color">margin-top</span></li>
				<li><span class="fb-props-color">margin-right</span></li>
				<li><span class="fb-props-color">margin-bottom</span></li>
				<li><span class="fb-props-color">margin-left</span></li>
			</ul>
			<p>All the margin properties can have the following values:</p>
			<ul>
				<li>auto - the browser calculates the margin</li>
				<li>length - specifies a margin in px, pt, cm, etc.</li>
				<li>% - specifies a margin in % of the width of the containing element</li>
				<li>inherit - specifies that the margin  should be inherited from the parent element</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;margin-top<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 50px<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
								&nbsp;&nbsp;margin-right<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 30px<span class="css-delimitercolor" style="color:black">;</span>
								</span><br>
								&nbsp;&nbsp;margin-bottom<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 50px<span class="css-delimitercolor" style="color:black">;</span>
								</span><br>
								&nbsp;&nbsp;margin-left<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 80px<span class="css-delimitercolor" style="color:black">;</span>
								</span><br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>

			<hr>
			<h2>Margin - Shorthand Property</h2>
			<p>To shorten the code, it is possible to specify all the margin properties in one property.</p>
			<p>The <span class="fb-props-color">margin</span> property is a shorthand property for the following individual margin properties:</p>
			<ul>
				<li><span class="fb-props-color">margin-top</span></li>
				<li><span class="fb-props-color">margin-right</span></li>
				<li><span class="fb-props-color">margin-bottom</span></li>
				<li><span class="fb-props-color">margin-left</span></li>
			</ul>
			<p>So, here is how it works:</p>
			<p>If the <span class="fb-props-color">margin</span> property has four values:</p>
			<ul>
				<li>
					<strong>margin: 25px 50px 75px 100px;</strong>
		            <ul>
		            	<li>top margin is 25px</li>
		            	<li>right margin is 50px</li>
		            	<li>bottom margin is 75px</li>
		            	<li>left margin is 100px</li>
		            </ul>
				</li>
			</ul>
			
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px 75px 100px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>

			<p>If the <span class="fb-props-color">margin</span> property has three values:</p>
			<ul>
				<li><strong>margin: 25px 50px 75px;</strong>
		            <ul>
		            	<li>top margin is 25px</li>
		            	<li>right and left margins are 50px</li>
		            	<li>bottom margin is 75px</li>
		            </ul>
				</li>
			</ul>

			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px 75px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>

			<p>If the <span class="fb-props-color">margin</span> property has two values:</p>
			<ul>
				<li><strong>margin: 25px 50px;</strong>
		            <ul>
		            	<li>top and bottom margins are 25px</li>
		            	<li>right and left margins are 50px</li>
		            </ul>
				</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<p>If the <span class="fb-props-color">margin</span> property has one value:</p>
			<ul>
				<li><strong>margin: 25px;</strong>
		            <ul>
		           	    <li>all four paddings are 25px</li>
		            </ul>
				</li>
			</ul>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<h2>The auto Value</h2>
			<p>You can set the <span class="fb-props-color">margin</span> property to auto to horizontally center the element within its container.</p>
			<p>The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.</p>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		div <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);"><br>
				  				&nbsp;&nbsp;width<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 300px; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> auto; <span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<hr>
		`
	}
]