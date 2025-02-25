angular.module('LetsCook.builder', [])

.controller('BuilderController', function ($scope, Builder) {
  $scope.data = {};
  $scope.recipe;
  $scope.loaded = false;

  $scope.extractRecipe = function () {
    Builder.extractRecipe($scope, $scope.data.url).then(function (recipe) {
      $scope.title = recipe.title;
      $scope.ingredients = recipe.extendedIngredients;
      $scope.servings = recipe.servings;
      $scope.cookingMinutes = recipe.cookingMinutes;
      $scope.readyInMinutes = recipe.readyInMinutes;
      $scope.sourceUrl = recipe.sourceUrl;
      $scope.instructions = recipe.text;
      $scope.loaded = true;
    })
    .catch(function (err) {
      console.error(err);
    });
  };
  $scope.Submit = function () {
    html2canvas(document.getElementsByClassName('recipeCard'), {
      onrendered: function (canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("recipeCard/png");
        a.download = 'recipeCard.png';
        a.click();
      }
    });
  };
});