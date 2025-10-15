import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Employee {
  id: string;
  name: string;
  salary: number;
  gender: string;
  department: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Employee Management System');
  
  // Employee data
  employees = signal<Employee[]>([]);
  filteredEmployees = signal<Employee[]>([]);
  
  // Modal state
  showModal = signal(false);
  isEditMode = signal(false);
  
  // Current employee being edited/added
  currentEmployee: Employee = this.getEmptyEmployee();
  
  // Filter and search
  searchTerm = '';
  filterDepartment = '';
  filterGender = '';
  
  constructor() {
    // Load employees from localStorage on init
    this.loadEmployees();
    
    // Auto-save to localStorage whenever employees change
    effect(() => {
      const emps = this.employees();
      if (emps.length > 0 || localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(emps));
      }
    });
  }
  
  private getEmptyEmployee(): Employee {
    return {
      id: '',
      name: '',
      salary: 0,
      gender: '',
      department: ''
    };
  }
  
  // Load employees from localStorage
  private loadEmployees(): void {
    const stored = localStorage.getItem('employees');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        this.employees.set(parsed);
        this.filteredEmployees.set([...parsed]);
      } catch (e) {
        console.error('Error loading employees:', e);
        this.employees.set([]);
        this.filteredEmployees.set([]);
      }
    } else {
      this.employees.set([]);
      this.filteredEmployees.set([]);
    }
  }
  
  // Open modal for adding new employee
  openModal(): void {
    this.isEditMode.set(false);
    this.currentEmployee = this.getEmptyEmployee();
    this.showModal.set(true);
  }
  
  // Close modal
  closeModal(): void {
    this.showModal.set(false);
    this.currentEmployee = this.getEmptyEmployee();
  }
  
  // Save employee (add or update)
  saveEmployee(): void {
    if (!this.validateEmployee()) {
      return;
    }
    
    const currentEmployees = [...this.employees()];
    
    if (this.isEditMode()) {
      // Update existing employee
      const index = currentEmployees.findIndex(emp => emp.id === this.currentEmployee.id);
      if (index !== -1) {
        currentEmployees[index] = { ...this.currentEmployee };
      }
    } else {
      // Add new employee
      // Check if ID already exists
      if (currentEmployees.some(emp => emp.id === this.currentEmployee.id)) {
        alert('Employee ID already exists!');
        return;
      }
      currentEmployees.push({ ...this.currentEmployee });
    }
    
    // Update employees signal
    this.employees.set(currentEmployees);
    
    // Immediately update filtered employees
    this.filterEmployees();
    
    // Close modal
    this.closeModal();
  }
  
  // Edit employee
  editEmployee(employee: Employee): void {
    this.isEditMode.set(true);
    this.currentEmployee = { ...employee };
    this.showModal.set(true);
  }
  
  // Delete employee
  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      const currentEmployees = this.employees().filter(emp => emp.id !== id);
      this.employees.set(currentEmployees);
      this.filterEmployees();
    }
  }
  
  // Clear all filters
  clearFilters(): void {
    this.searchTerm = '';
    this.filterDepartment = '';
    this.filterGender = '';
    this.filterEmployees();
  }
  
  // Filter employees based on search and filters
  filterEmployees(): void {
    let filtered = [...this.employees()];
    
    // Apply search filter
    if (this.searchTerm && this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(emp => 
        emp.name.toLowerCase().includes(search) ||
        emp.department.toLowerCase().includes(search) ||
        emp.id.toLowerCase().includes(search)
      );
    }
    
    // Apply department filter
    if (this.filterDepartment && this.filterDepartment.trim()) {
      filtered = filtered.filter(emp => emp.department === this.filterDepartment);
    }
    
    // Apply gender filter
    if (this.filterGender && this.filterGender.trim()) {
      filtered = filtered.filter(emp => emp.gender === this.filterGender);
    }
    
    // Always update the signal with a new array reference
    this.filteredEmployees.set([...filtered]);
  }
  
  // Get initials from name for avatar
  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  
  // Validate employee data
  private validateEmployee(): boolean {
    if (!this.currentEmployee.id || !this.currentEmployee.name || 
        this.currentEmployee.salary === null || this.currentEmployee.salary === undefined || 
        !this.currentEmployee.gender || !this.currentEmployee.department) {
      alert('Please fill in all required fields');
      return false;
    }
    
    if (this.currentEmployee.salary < 0) {
      alert('Salary cannot be negative');
      return false;
    }
    
    return true;
  }
}
