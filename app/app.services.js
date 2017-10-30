angular.module('app')
    .factory('shopingCart', function ()
    {
        var items = [];
        var products = [
            {
                id: '1',
                name: 'Item 1',
                description: 'Big desc about item',
                price: '123'
            },
            {
                id: '2',
                name: 'Item 2',
                description: 'Big desc about item',
                price: '345'
            },
            {
                id: '3',
                name: 'Item 3',
                description: 'Big desc about item',
                price: '567'
            },
            {
                id: '4',
                name: 'Item 4',
                description: 'Big desc about item',
                price: '789'
            },
            {
                id: '5',
                name: 'Item 5',
                description: 'Big desc about item',
                price: '900'
            },
            {
                id: '6',
                name: 'Item 6',
                description: 'Big desc about item',
                price: '1000'
            },
        ];
        return {
            getItems: function ()
            {
                return items;
            },
            getItemsCount: function ()
            {
                return items.length;
            },
            getAllProducts: function ()
            {
                return products;
            },
            getProductById: function (id)
            {
                var obj;

                for (product in products)
                {
                    if (products[product].id == id)
                    {
                        obj = products[product];
                    }
                }
                return obj
            },
            addToCart: function (id)
            {
                for (obj in products)
                {
                    if (products[obj].id == id)
                    {
                        items.push(products[obj]);
                    }
                }

            },
            checkout: function ()
            {
                items = [];
            }
        };
    })