import React, { useContext } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import SideNav from "../../../Components/SideNav/SideNav";
import useBooks from "../../../hooks/useBooks";
import BookCard from "../../Shared/BookCard/BookCard";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HomeOurBooks from "../HomeOurBooks/HomeOurBooks";
import HomeCategories from "../HomeCategories/HomeCategories";
import HomeWriters from "../HomeWriters/HomeWriters";

export default function Home() {
  const { language } = useContext(ThemeContext);
  const [books, isLoading] = useBooks();
  return (
    <div>
      <Helmet>
        <title>Maktabatul Amzad - Home</title>
      </Helmet>
      <HomeBanner />
      <HomeOurBooks />
      <HomeCategories />
      <HomeWriters />
      <div className="container">
        <div className="flex justify-between">
          <SideNav></SideNav>
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="ml-5 text-xl font-bold">Our Books</h2>
              <Link to="/books" className="hover:text-primary">
                See All
              </Link>
            </div>
            <div className="flex flex-wrap">
              {isLoading ? (
                <>
                  <p className="text-center mt-20">Loading Books ...</p>
                </>
              ) : (
                <>
                  {books.map((book) => (
                    <BookCard key={book._id} book={book}></BookCard>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
