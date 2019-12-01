from PyPDF2 import PdfFileWriter, PdfFileReader
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
import math

existing_pdf = PdfFileReader(open("finalForm.pdf", "rb"), strict=False)
re = PdfFileWriter()


def setup_RAW():
    RAW = io.BytesIO()
    return RAW, canvas.Canvas(RAW, pagesize=letter)


def squish(raw_file, page):
    raw_file.seek(0)
    new_pdf = PdfFileReader(raw_file)

    # add the "watermark" (which is the new pdf) on the existing page
    page = existing_pdf.getPage(page)
    page.mergePage(new_pdf.getPage(0))

    re.addPage(page)


def fill_page1():

    RAW, can = setup_RAW()

    # Landlords names

    # maximum 4 entries
    tenantNames = [
        ("Max", "Pham"),
        ("Demetre", "Jouras"),
        ("Yu Ji", "Mao"),
        ("Mark", "Abdullah")]

    for i in range(len(tenantNames)):
        can.drawString(
            150, 450 - i*27, "{} {}".format(tenantNames[i][0], tenantNames[i][1]))

    # Tenants names
    # maximum 8 entries
    tenantNames = [
        ("Max", "Pham"),
        ("Demetre", "Jouras"),
        ("Yu Ji", "Mao"),
        ("Mark", "Abdullah"),
        ("Dennis", "Marks"),
        ("Amir", "Mousavi"),
        ("Kevin", "Guo")]

    for i in range(len(tenantNames)):
        can.drawString(90, 262 - i*27, tenantNames[i][0])
        can.drawString(420, 262 - i*27, tenantNames[i][1])

    can.save()

    squish(RAW, 0)


def fill_page2():

    RAW, can = setup_RAW()

    # Rental Unit
    unit = "202"
    streetNum = "12121"
    streetName = "Jacobson"
    city = "Toronto"
    postalCode = "M2U1K9"
    parking = "50, outside, beside building"
    isCondominium = True
    can.drawString(22, 703, unit)
    can.drawString(220, 703, streetNum)
    can.drawString(310, 703, streetName)
    can.drawString(22, 676, city)
    can.drawString(510, 676, postalCode)
    can.drawString(22, 633, parking)

    # replace v with a checkmark.
    can.drawString(23, 596, "x") if isCondominium else can.drawString(
        74, 596, "x")

    #############################################

    # Contact info
    contactUnit = "3200"
    contactStreetNum = "40"
    contactStreetName = "St George"
    contactPOBox = " "
    contactCity = "Toronto"
    contactProvince = "Ontario"
    contactPostalCode = "M5S 2E4"
    recieveNoticeByEmail = False
    optionalEmailAddresses = "Justin@gmail.com"
    landlordIsProvidingContact = True
    landlordContact = "(647) 123 - 4567"

    can.drawString(22, 502, contactUnit)
    can.drawString(130, 502, contactStreetNum)
    can.drawString(210, 502, contactStreetName)
    can.drawString(530, 502, contactPOBox)
    can.drawString(22, 475, contactCity)
    can.drawString(280, 475, contactProvince)
    can.drawString(480, 475, contactPostalCode)

    can.drawString(23, 425, "x") if recieveNoticeByEmail else can.drawString(
        74, 425, "x")

    can.drawString(22, 390, optionalEmailAddresses)

    can.drawString(23, 354, "x") if landlordIsProvidingContact else can.drawString(
        74, 354, "x")

    can.drawString(22, 320, landlordContact)

    ############################################
    # term of tenancy agreement

    startDate = "1999/06/27"
    endDate = "2020/01/01"
    otherSpecification = "Bi-daily because reasons"
    checkmarks = [True, True, True]

    can.drawString(140, 237, startDate)

    for i in range(len(checkmarks)):  # checkmark places
        if checkmarks[i]:
            if i != 2:
                can.drawString(23, 192 - i*27, "x")
            else:
                can.drawString(23, 192 - i*24, "x")

    can.drawString(188, 190, endDate)
    can.drawString(240, 145, otherSpecification)

    ############################################
    # RENT
    payOn = "first"

    can.drawString(170, 55, payOn)

    can.save()

    squish(RAW, 1)


def fill_page3():

    RAW, can = setup_RAW()

    # RENT
    rentChecks = [True, True]
    other = "weekly"
    for i in range(len(rentChecks)):
        if rentChecks[i]:
            if i == 0:
                can.drawString(42, 760, "x")
            else:
                can.drawString(42, 740, "x")
                can.drawString(160, 740, other)

    can.drawString(380, 695, "base rent")
    can.drawString(380, 678, "parking")

    for i in range(10):
        can.drawString(80, 637 - 20*i, "line {0}".format(i))
        can.drawString(370, 637 - 20*i, "line {0}, field 2".format(i))

    can.drawString(370, 414, "total rent")

    can.drawString(30, 310, "payable to")
    can.drawString(30, 268, "Payment method")

    can.drawString(455, 205, "partial payment")

    can.drawString(40, 180, "partial payment day")

    can.drawString(370, 175, "pp start day")
    can.drawString(460, 175, "pp end day")
    can.drawString(160, 115, "administration charge")

    can.save()

    squish(RAW, 2)


def fill_page4():
    RAW, can = setup_RAW()

    # services and utilities
    index_services = 0
    services = {"Gas": True,
                "AC": True,
                "Storage": True,
                "Laundry": True,
                "Parking": True,
                "Other1": True,
                "Other2": True,
                "Other3": True,
                "Other4": True,
                "Other5": True}
    for i in services:
        if services[i]:
            can.drawString(345, 710 - index_services*21.5, "x")
        else:
            can.drawString(385, 710 - index_services*21.5, "x")
        index_services += 1

    laundryCost = True
    parkingCost = False

    if services["Laundry"]:
        if laundryCost:
            can.drawString(423, 645, "x")
        else:
            can.drawString(495, 645, "x")

    if services["Parking"]:
        if parkingCost:
            can.drawString(425, 623, "x")
        else:
            can.drawString(496, 623, "x")

    otherServices = ["PS4", "PC", "Switch", "Xbox", "Broke"]
    for i in range(len(otherServices)):
        can.drawString(
            80, 604 - i*22, "{0}".format(otherServices[i]))

    details_services = "The io module provides Python’s main facilities for dealing with various types of I/O. There are three main types of I/O: text I/O, binary I/O and raw I/O. These are generic categories, and various backing stores can be used for each of them. A concrete object belonging to any of these categories is called a file object. Other common terms are stream and file-like object."

    # TODO: Words are getting cut off wh
    # ich is annoying.
    LINE_LIMIT = 106
    start, end = 0, LINE_LIMIT + 1

    for i in range(math.ceil(len(details_services) / LINE_LIMIT)):
        can.drawString(30, 454 - i*21, details_services[start:end])
        start = end
        end += LINE_LIMIT

    # TRUE == Landlord ------- False == Tenant
    # TODO: Can both parties be responsible of this ?
    responsibilities = {"Electricity": True,
                        "Heat": False,
                        "Water": True}
    index_respon = 0
    for i in responsibilities:
        if responsibilities[i]:
            can.drawString(77, 301 - index_respon*21.5, "x")
        else:
            can.drawString(150, 301 - index_respon*21.5, "x")
        index_respon += 1

    details_responsibility = "The io module provides Python’s main facilities for dealing with various types of I/O. There are three main types of I/O: text I/O, binary I/O and raw I/O. These are generic categories, and various backing stores can be used for each of them. A concrete object belonging to any of these categories is called a file object. Other common terms are stream and file-like object."

    # TODO: Words are getting cut off wh
    # ich is annoying.
    start, end = 0, LINE_LIMIT + 1

    for i in range(math.ceil(len(details_responsibility) / LINE_LIMIT)):
        can.drawString(30, 205 - i*21, details_responsibility[start:end])
        start = end
        end += LINE_LIMIT

    can.save()

    squish(RAW, 3)


def fill_page5():
    RAW, can = setup_RAW()

    # Rent Discounts
    rentDiscounts = False

    if rentDiscounts:
        can.drawString(23, 715, "x")
    else:
        can.drawString(23, 675, "x")

    details_rent_discounts = "The io module provides Python’s main facilities for dealing with various types of I/O. There are three main types of I/O: text I/O, binary I/O and raw I/O. These are generic categories, and various backing stores can be used for each of them."

    # TODO: Words are getting cut off wh
    # ich is annoying.
    LINE_LIMIT = 106
    start, end = 0, LINE_LIMIT + 1

    for i in range(math.ceil(len(details_rent_discounts) / LINE_LIMIT)):
        can.drawString(30, 641 - i*21, details_rent_discounts[start:end])
        start = end
        end += LINE_LIMIT

    ###########################################
    # Rent Deposit
    rentDeposits = True
    totalDeposits = 2000

    if rentDeposits:
        can.drawString(23, 478, "x")  # + 40
    else:
        can.drawString(23, 438, "x")
        can.drawString(210, 438, str(totalDeposits))

    ###########################################
    # Key Deposit
    keyDeposit = False
    refundables = 2000

    if keyDeposit:
        can.drawString(23, 295, "x")  # +40
    else:
        can.drawString(23, 250, "x")
        can.drawString(260, 250, str(refundables))

    details_key_deposit = "The io module provides Python’s main facilities for dealing with various types of I/O. There are three main types of I/O: text I/O, binary I/O and raw I/O. These are generic categories, and various backing stores can be used for each of them."

    # TODO: Words are getting cut off wh
    # ich is annoying.
    LINE_LIMIT = 106
    start, end = 0, LINE_LIMIT + 1

    for i in range(math.ceil(len(details_key_deposit) / LINE_LIMIT)):
        can.drawString(30, 198 - i*21, details_key_deposit[start:end])
        start = end
        end += LINE_LIMIT

    can.save()

    squish(RAW, 4)


def fill_page6():
    RAW, can = setup_RAW()

    # Smoking
    smoking = False

    if smoking:
        can.drawString(23, 686, "x")
    else:
        can.drawString(23, 646, "x")

    details_rent_discounts = "The io module provides Python’s main facilities for dealing with various types of I/O. There are three main types of I/O: text I/O, binary I/O and raw I/O. These are generic categories, and various backing stores can be used for each of them."

    # TODO: Words are getting cut off wh
    # ich is annoying.
    LINE_LIMIT = 106
    start, end = 0, LINE_LIMIT + 1

    for i in range(math.ceil(len(details_rent_discounts) / LINE_LIMIT)):
        can.drawString(30, 610 - i*21, details_rent_discounts[start:end])
        start = end
        end += LINE_LIMIT

    ###########################################
    # Rent Deposit
    tenantInsurance = False

    if tenantInsurance:
        can.drawString(23, 438, "x")  # + 40
    else:
        can.drawString(23, 398, "x")

    ###########################################

    can.save()

    squish(RAW, 5)


def fill_page7():
    RAW, can = setup_RAW()

    # Additional Terms
    smoking = False

    if smoking:
        can.drawString(23.5, 433, "x")
    else:
        can.drawString(23.5, 391, "x")

    can.save()

    squish(RAW, 6)


if __name__ == "__main__":
    PAGES_READY = 7

    output = existing_pdf
    fill_page1()
    fill_page2()
    fill_page3()
    fill_page4()
    fill_page5()
    fill_page7()

    for i in range(PAGES_READY, existing_pdf.numPages - 1):
        re.addPage(existing_pdf.getPage(i))

    # finally, write "output" to a real file
    outputStream = open("destination.pdf", "wb")
    re.write(outputStream)
    outputStream.close()
