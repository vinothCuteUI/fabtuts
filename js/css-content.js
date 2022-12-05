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
				  				&nbsp;&nbsp;padding<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px 75px 100px <span class="css-delimitercolor" style="color:black">;</span>
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
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px 75px 100px <span class="css-delimitercolor" style="color:black">;</span>
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
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px 75px <span class="css-delimitercolor" style="color:black">;</span>
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
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px 50px <span class="css-delimitercolor" style="color:black">;</span>
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
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 25px<span class="css-delimitercolor" style="color:black">;</span>
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
		`,
		"list-style":`
			<h1>CSS Lists</h1>
			<p>The List in CSS specifies the listing of the contents or items in a particular manner i.e., it can either be organized orderly or unorder way, which helps to make a clean webpage. It can be used to arrange the huge with a variety of content as they are flexible and easy to manage. </p>
			<a href="#" class='btns tryit '>Try it yourself</a>
			<hr>

			<h2>HTML Lists and CSS List Properties</h2>
			<p>In HTML, there are two main types of lists:</p>
			<ul>
				<li>unordered lists <span class="fb-props-color">ul</span> - the list items are marked with bullets</li>
				<li>ordered lists <span class="fb-props-color">ol</span> - the list items are marked with numbers or letters</li>
			</ul>

			<p>The CSS list properties allow you to:</p>
			<ul>
				<li>Set different list item markers for ordered lists</li>
				<li>Set different list item markers for unordered lists</li>
				<li>Set an image as the list item marker</li>
				<li>Add background colors to lists and list items</li>
			</ul>

			<hr>

			<h2>Different List Item Markers</h2>
			<p>The <span class="fb-props-color">list-style-type</span> property specifies the type of list item marker.</p>
			<p>The following example shows some of the available list item markers:</p>

			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		ul <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);">
				  				<br>
				  				&nbsp;&nbsp;list-style-type<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> circle<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
					<br><br>
					<span class="css-selectorcolor" style="color:brown">
				  		ol <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);">
				  				<br>
				  				&nbsp;&nbsp;list-style-type<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> upper-roman<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<p>Note: Some of the values are for unordered lists, and some for ordered lists.</p>
			<hr>
			<h2>An Image as The List Item Marker</h2>
			<p>The <span class="fb-props-color">list-style-image</span> property specifies an image as the list item marker:</p>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		ul <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);">
				  				<br>
				  				&nbsp;&nbsp;list-style-image<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> url('sqpurple.gif')<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
					
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<hr>
			<h2>Position The List Item Markers</h2>
			<p>The <span class="fb-props-color">list-style-position</span> property specifies the position of the list-item markers (bullet points).</p>
			<p>"list-style-position: outside;" means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. This is default:</p>
			<ul style="list-style-position:outside;width:30%;">
				<li style="border:solid 1px #ccc;">Coffee -A brewed drink prepared from roasted coffee beans...</li>
				<li style="border:solid 1px #ccc;">Tea</li>
				<li style="border:solid 1px #ccc;">Coca-cola</li>
			</ul>
			<p>"list-style-position: inside;" means that the bullet points will be inside the list item. As it is part of the list item, it will be part of the text and push the text at the start:</p>
			<ul style="list-style-position:inside;width:30%;">
				<li style="border:solid 1px #ccc;">Coffee -A brewed drink prepared from roasted coffee beans...</li>
				<li style="border:solid 1px #ccc;">Tea</li>
				<li style="border:solid 1px #ccc;">Coca-cola</li>
			</ul>

			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		ul <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);">
				  				<br>
				  				&nbsp;&nbsp;list-style-position<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> outside<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
				  				&nbsp;&nbsp;list-style-position<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> inside<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
					
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<hr>

			<h2>Remove Default Settings</h2>
			<p>The <span class="fb-props-color">list-style-type:none</span> property can also be used to remove the markers/bullets. Note that the list also has default margin and padding. To remove this, add <span class="fb-props-color">margin:0</span> and <span class="fb-props-color">padding:0</span>:</p>
			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		ul <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);">
				  				<br>
				  				&nbsp;&nbsp;list-style-type<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> none<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
				  				&nbsp;&nbsp;margin<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 0px<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
				  				&nbsp;&nbsp;padding<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> 0px<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
					
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>

			<hr>
			<h2>List - Shorthand property</h2>
			<p>The <span class="fb-props-color">list-style</span> property is a shorthand property. It is used to set all the list properties in one declaration:</p>

			<div class="css-example">
				<h4>Examples</h4>
				<div class="fb-code">
					<span class="css-selectorcolor" style="color:brown">
				  		ul <span class="css-delimitercolor" style="color:black">{</span>
				  			<span class="css-propertycolor" style="color:var(--primary-color);">
				  				<br>
				  				&nbsp;&nbsp;list-style<span class="css-propertyvaluecolor" style="color:black"><span class="css-delimitercolor" style="color:black">:</span> square inside url('sqicon.gif')<span class="css-delimitercolor" style="color:black">;</span>
				  				</span>
				  				<br>
							</span>
							<span class="css-delimitercolor" style="color:black">}</span> 
					</span>
					
				</div>
				<a href="#" class='btns tryit '>Try it yourself</a>
			</div>
			<p>When using the shorthand property, the order of the property values are:</p>
			<ul>
				<li><span class="fb-props-color">list-style-type</span> (if a list-style-image is specified, the value of this property will be displayed if the image for some reason cannot be displayed)</li>
				<li><span class="fb-props-color">list-style-position</span> (specifies whether the list-item markers should appear inside or outside the content flow)</li>
				<li><span class="fb-props-color">list-style-image</span> (specifies an image as the list item marker)</li>

			</ul>
			<p>If one of the property values above is missing, the default value for the missing property will be inserted, if any.</p>

			<hr>
			`,
		"background":`
			<h1>CSS Backgrounds</h1>
			<p>Content will be add shortly</p>
			<a href="#" class='btns tryit '>Try it yourself</a>
			<hr>
		`,
		"text-alignment":`
			<h1>CSS Text Alignment</h1>
			<p>Content will be add shortly</p>
			<a href="#" class='btns tryit '>Try it yourself</a>
			<hr>
		`,
		"text-decoration":`
			<h1>CSS Text Decoration</h1>
			<p>Content will be add shortly</p>
			<a href="#" class='btns tryit '>Try it yourself</a>
			<hr>
		`,
		
	}
]