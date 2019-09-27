# Raccoons Hacktoberfest Starter
¡Haz tu primer contribución con nosotros!

## Instrucciones
1) Hazle un *fork* al repositorio
2) Clona tu nuevo repositorio
3) Crea una nueva rama de la siguiente manera `git checkout -B submission`
4) Añade tu nombre al archivo `CONTRIBUTORS.md` usando la siguiente convención:

```markdown
Nombre: [TU NOMBRE](Link a tu perfil de GitHub)
- Bio: ¿Quién eres, qué te gusta, cuáles son tus lenguajes favoritos?
- GitHub: [Tu nombre de usuario en GitHub](Link a tu perfil de GitHub)
```

5) Agrega tu nombre y una url a tu perfil de GitHub en el archivo `contributors.html` usando la siguiente plantilla:

```html
<article class="column">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="URL-DE-TU-FOTO" alt="Foto del Contribuidor">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">AQUI-VA-TU-NOMBRE</p>
        <p class="subtitle is-6">
          <a class="button" href="URL-DE-TU-GITHUB">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>
              GitHub
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
</article>
```

Recuerda sustituir con tus datos, y no borrar la plantilla del archivo `contributors.html` para que otra persona pueda usarla.

6) Add, commit y push:

```command-line
$ git add contributors.html CONTRIBUTORS.md
$ git commit -m "Hacktoberfest - TU NOMBRE"
$ git push origin submission
```

7) Ingresa al [repositorio original](https://github.com/raccoons-hacker-club/hacktoberfest-starter) en GitHub, haz un nuevo Pull Request

8) ¡Disfruta tu primer contribución!
