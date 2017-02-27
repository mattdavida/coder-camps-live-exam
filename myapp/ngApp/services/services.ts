namespace myapp.Services {
  export class MovieService {
    private MovieResource;

    public list() {
      return this.MovieResource.query();
    }

    public get(id) {
      return this.MovieResource.get({id: id});
    }

    public save(movie) {
      return this.MovieResource.save({id: movie._id}, movie).$promise;
    }

    public remove(movieId) {
      return this.MovieResource.remove({id: movieId}).$promise;
    }

    constructor(private $resource) {
      this.MovieResource = $resource("/api/movies/:id");
    }
  }
  angular.module("myapp").service("movieService", MovieService);

    }
