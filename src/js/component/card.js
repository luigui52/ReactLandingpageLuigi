import React from "react";

export function Card() {
	return (
		<div className="card-deck">
			<div className="card">
				<img
					className="card-img-top"
					src="https://cdn.pixabay.com/photo/2017/05/12/15/16/hexagon-2307350_960_720.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">HTML</h5>
					<p className="card-text">
						HTML (lenguaje de marcado de hipertexto) es el código
						que se utiliza para estructurar una página web y su
						contenido.
					</p>
					<a href="#" className="btn btn-primary">
						Ir al curso
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">CSS</h5>
					<p className="card-text">
						CSS (en inglés Cascading Style Sheets) se denomina
						lenguaje de hojas de estilo en cascada y se usa para
						estilizar elementos escritos en un lenguaje de marcado
						como HTML.
					</p>
					<a href="#" className="btn btn-primary">
						Ir al curso
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">JavaScript</h5>
					<p className="card-text">
						JavaScript es un lenguaje de programación que te permite
						implementar funciones complejas en páginas web.
					</p>
					<a href="#" className="btn btn-primary">
						Ir al curso
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://cdn.pixabay.com/photo/2016/10/18/19/40/anatomy-1751201_960_720.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Python</h5>
					<p className="card-text">
						Python es un lenguaje de programación interpretado de
						tipado dinámico cuya filosofía hace hincapié en una
						sintaxis que favorezca un código legible.
					</p>
					<a href="#" className="btn btn-primary">
						Ir al curso
					</a>
				</div>
			</div>
		</div>
	);
}
