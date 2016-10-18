In this chapter we reviewed

The CommonJS standards specify the following three key components when working
with modules:
 require() : This method is used to load the module into your code.
 exports : This object is contained in each module and allows you to expose pieces of
your code when the module is loaded.

module : This object was originally used to provide metadata information about the
module. It also contains the pointer of an exports object as a property. However, the
popular implementation of the exports object as a standalone object literally changed
the use case of the module object
