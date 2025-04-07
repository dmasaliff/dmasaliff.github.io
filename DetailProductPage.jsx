import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

export default function DetailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getDetailProduct(id, (data) => {
      setProduct(data);
      setLoading(false);
      // eslint-disable-next-line no-unused-vars
    }).catch(err => {
      setError("Failed to fetch product details. Please try again later.");
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="w-100 min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-100 min-h-screen flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="w-100 min-h-screen flex justify-center items-center">
      <div className="flex font-sans">
        <div className="flex-none w-48 relative">
          <img
            src={product.image}
            alt={product.title}
            className="relative max-w-full max-h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {product.title}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              {product.price
                ? product.price.toLocaleString("us-US", {
                  style: "currency",
                  currency: "USD",
                })
                : "N/A"}
            </div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              Rating: {product.rating?.rate || "No rating"}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              {product.description || "No description available"}
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
}
