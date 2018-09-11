import { _ } from 'underscore';

export class Utils {

 static _cartesianProductOf(args:Object) {
    if (arguments.length>1) args=_.toArray(arguments);

    // strings to arrays of letters
    args=_.map(args, opt=>typeof opt==='string'?_.toArray(opt):opt)

    return _.reduce(args, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [ [] ]);
};

static  _cartesianProductObj(optObj:Object){

    var keys = _.keys(optObj);
    var opts = _.values(optObj);
    //  console.log(keys);
    var combs = this._cartesianProductOf(opts);
    return _.map(combs,function(comb){
        return _.object(keys,comb);
        //return comb;
    });
}

static product(args:any) {
    if(!args.length)
        return [[]];
    var prod = this.product(args.slice(1)), r = [];
    args[0].forEach(function(x) {
        prod.forEach(function(p) {
            r.push([x].concat(p));
        });
    });
    return r;
};

static objectProduct(obj:Object) {

  console.log(Object.keys(obj));
    var keys = Object.keys(obj),
        values = keys.map(function(x) { return obj[x] });

    return this.product(values).map(function(p) {
        var e = {};
        keys.forEach(function(k, n) { e[k] = p[n] });
        return e;
    });
};

}
