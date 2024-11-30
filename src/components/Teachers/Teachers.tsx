"use client";

import teachersData from "@/components/Teachers/teachersData";
import {
  ChevronLeft,
  ChevronRight,
  LinkedinIcon,
  Mail,
  MoreHorizontal,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

const useResponsiveItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
};

const PaginationButton = ({
  children,
  onClick,
  isActive = false,
  disabled = false,
  className = "",
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex h-9 min-w-9 items-center justify-center rounded-md px-3.5
      text-sm font-medium transition-colors
      ${
        isActive
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      }
      ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      ${className}
    `}
  >
    {children}
  </button>
);

const Pagination = ({
  totalItems,
  currentPage,
  onPageChange,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        return [1, 2, 3, "dots", totalPages];
      } else if (currentPage >= totalPages - 2) {
        return [1, "dots", totalPages - 2, totalPages - 1, totalPages];
      } else {
        return [
          1,
          "dots",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "dots",
          totalPages,
        ];
      }
    }
    return pageNumbers;
  };

  return (
    <nav
      className="flex items-center justify-center space-x-2"
      role="navigation"
      aria-label="Pagination"
    >
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </PaginationButton>

      <div className="flex items-center space-x-2">
        {getPageNumbers().map((page, index) => {
          if (page === "dots") {
            return (
              <span
                key={`dots-${index}`}
                className="flex h-9 items-center justify-center px-1"
              >
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </span>
            );
          }

          return (
            <PaginationButton
              key={page}
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </PaginationButton>
          );
        })}
      </div>

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </PaginationButton>
    </nav>
  );
};

// Main Teachers Component
const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useResponsiveItemsPerPage();

  // Reset current page when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = teachersData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-800 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
            O'qituvchilar
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Bizning malakali va tajribali o'qituvchilar jamoasi bilan tanishing
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {currentTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              {/* Teacher Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  {teacher.name}
                </h3>
                <p className="mb-3 font-medium text-blue-600 dark:text-blue-400">
                  {teacher.designation}
                </p>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {teacher.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <a
                    href={`mailto:${teacher.email}`}
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label={`Email ${teacher.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={teacher.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label={`${teacher.name}'s LinkedIn profile`}
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://twitter.com/${teacher.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label={`${teacher.name}'s Twitter profile`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination
            totalItems={teachersData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Teachers;
