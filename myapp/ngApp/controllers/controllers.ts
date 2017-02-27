namespace myapp.Controllers {

    export class HomeController {
        public movies;
        public movie = {};

        public save() {
          return this.movieService.save(this.movie).then(() => {
            this.movies = this.movieService.list();
            this.movie = {};
          }).catch((err) => {
            console.error(err);
          });
        }

        public remove(movieId) {
          return this.movieService.remove(movieId).then(() => {
            this.movies = this.movieService.list();
          }).catch((err) => {
            console.error(err)
          });
        }

        constructor(private movieService) {
          this.movies = this.movieService.list();
        }
      }

      export class EditController {
        public movie;

        public save() {
          return this.movieService.save(this.movie).then(() => {
            this.$state.go("home");
          }).catch((err) => {
            console.error(err);
          });
        };

        constructor(private movieService, private $state, private $stateParams) {
          let movieId = $stateParams["id"];
          this.movie = this.movieService.get(movieId);
        }
      }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
