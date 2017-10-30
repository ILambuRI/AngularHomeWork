angular.module('app')
	.directive('iconBasket', function ()
	{
		return {
			template: 'Quantity: {{itemsCount()}}',
			controller: function ($scope, shopingCart)
			{
				$scope.itemsCount = shopingCart.getItemsCount;
			}
		};
	});