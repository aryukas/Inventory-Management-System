"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaBox, FaPlus, FaFileInvoice, FaTachometerAlt } from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <button
          className="toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FaBars />
        </button>
        {!isCollapsed && <h2 className="sidebar-title">Menu</h2>}
      </div>

      <ul className="sidebar-links">
        <li>
          <Link href="/dashboard" className="sidebar-link">
            <FaTachometerAlt className="icon" />
            {!isCollapsed && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/AddProduct" className="sidebar-link">
            <FaPlus className="icon" />
            {!isCollapsed && "Add Product"}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/InvoiceForm" className="sidebar-link">
            <FaFileInvoice className="icon" />
            {!isCollapsed && "Invoices"}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/Inventory" className="sidebar-link">
            <FaBox className="icon" />
            {!isCollapsed && "Inventory"}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
