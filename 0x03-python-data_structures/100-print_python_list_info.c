#include <Python.h>
#include <stdio.h>
#include <object.h>
#include <listobject.h>

/**
 * print_python_list_info - some basic info about Python lists.
 * @p: python object
 */
void print_python_list_info(PyObject *p)
{
	int size;
	int allocated;
	int idx;

	size = Py_SIZE(p);
	allocated = ((PyListObject *)p)->allocated;
	printf("[*] Size of the Python List = %d\n", size);
	printf("[*] Allocated = %d\n", allocated);

	for (idx = 0; idx < size; idx++)
	{
		printf("Element %d: ", idx);
		printf("%s\n", ((PyList_GetItem(p, idx))->ob_type)->tp_name);
	}
}
